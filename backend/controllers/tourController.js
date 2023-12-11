const dbExecute = require("../config/db");
const newTourValidation = require("../request/newTourRequest");
const validator = require("validator");
const fs = require("fs/promises");
const path = require("path");

async function newTour(req, res) {
  try {
    const data = await dbExecute(
      "SELECT id, name FROM facilities WHERE is_deleted = FALSE"
    );
    res.json({
      message: "success",
      data: data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
}

async function saveTour(req, res) {
  try {
    let errors = {};
    // Save temp data
    const tourData = {
      title: req.title,
      slug: req.slug,
      categories: req.categories,
      price: req.price,
      address: req.address,
      address_link: req.address_link,
      description: req.description,
      ticket_operasional: req.ticket_operasional,
      facilities: req.facilities,
    };

    // Validate data
    newTourValidation(tourData);

    // Validate if slug already exists
    const checkSlug = await dbExecute("SELECT slug FROM tours WHERE slug = ?", [
      tourData.slug,
    ]);

    if (checkSlug.length > 0) {
      return res.status(400).json({
        message: "error",
        errors: { slug: "Slug already in use, please choose another!" },
      });
    }
    // Handle image upload
    await handleImageUpload("images", 6)(req, res);

    // Check if handleImageUpload encountered an error
    if (res.headersSent) {
      // Response has already been sent, do not proceed with further processing
      return;
    }

    // Ensure that req.facilities is an array
    const facilities = Array.isArray(req.facilities)
      ? req.facilities
      : [req.facilities];

    // Save tour data to the 'tours' table
    const tourInsertResult = await dbExecute(
      `INSERT INTO tours (title, slug, categories, price, address, address_link, description, ticket_operasional, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        tourData.title,
        tourData.slug,
        tourData.categories,
        tourData.price,
        tourData.address,
        tourData.address_link,
        tourData.description,
        tourData.ticket_operasional,
        new Date(),
      ]
    );

    // Get ID new inserted tour
    const tourId = tourInsertResult.insertId;

    // Iterate over facilities and save each one to 'tour_has_facilities' table
    for (const facility of facilities) {
      await dbExecute(
        `INSERT INTO tour_has_facilities (tour_id, facility_id, created_at) VALUES (?, ?, ?)`,
        [tourId, facility, new Date()]
      );
    }

    // Iterate over req.image_path and save each path to the 'tour_images' table
    for (const imgPath of req.image_path) {
      await dbExecute(
        `INSERT INTO tour_images (id_uuid, tour_id, img_path, created_at) VALUES (?, ?, ?, ?)`,
        [uuidv4(), tourId, imgPath, new Date()]
      );
    }

    res
      .status(201)
      .json({ message: "Tour, facilities, and images saved successfully!" });
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ message: "Internal Server Error!" });
  }
}

async function indexTour(req, res) {
  try {
    const allToursDetails = await dbExecute(`
      SELECT
    t.id AS tour_id,
    t.title,
    t.slug,
    t.categories,
    t.price,
    t.address,
    t.address_link,
    t.description,
    t.ticket_operasional,
    ti.img_path AS image_path,
    f.name AS facility_name
FROM tours t
LEFT JOIN tour_images ti ON t.id = ti.tour_id AND ti.is_deleted = FALSE
LEFT JOIN tour_has_facilities thf ON t.id = thf.tour_id
LEFT JOIN facilities f ON thf.facility_id = f.id
WHERE t.is_deleted = FALSE;
    `);

    // Continue with processing the retrieved allToursDetails
    // Calculate average rating for each tour
    const toursWithRatings = await Promise.all(
      allToursDetails.map(async (tour) => {
        const reviews = await dbExecute(
          "SELECT rating FROM reviews WHERE review_type_id = ? AND is_deleted = FALSE",
          [tour.id]
        );

        const averageRating =
          reviews.length > 0
            ? reviews.reduce((sum, review) => sum + review.rating, 0) /
              reviews.length
            : 0;

        return {
          ...tour,
          averageRating,
        };
      })
    );

    // Format the data for response
    const formattedAllToursDetails = {};

    toursWithRatings.forEach((tour) => {
      if (!formattedAllToursDetails[tour.slug]) {
        formattedAllToursDetails[tour.slug] = {
          title: tour.title,
          slug: tour.slug,
          categories: tour.categories,
          price: tour.price,
          address: tour.address,
          address_link: tour.address_link,
          description: tour.description,
          ticket_operasional: tour.ticket_operasional,
          images: [],
          facilities: [],
          averageRating: tour.averageRating,
        };
      }

      if (tour.image_path) {
        formattedAllToursDetails[tour.slug].images.push(tour.image_path);
      }

      if (tour.facility_name) {
        formattedAllToursDetails[tour.slug].facilities.push(tour.facility_name);
      }
    });

    const toursArray = Object.values(formattedAllToursDetails);

    res.status(200).json({
      message: "success",
      data: toursArray,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
}

async function detailTour(req, res) {
  const tourPacketId = req.params.id;

  try {
    // Retrieve tour details without average rating
    const tourDetails = await dbExecute(
      `SELECT
    t.title,
    t.slug,
    t.categories,
    t.price,
    t.address,
    t.address_link,
    t.description,
    t.ticket_operasional,
    ti.img_path AS image_path,
    f.name AS facility_name
FROM tours t
LEFT JOIN tour_has_facilities thf ON t.id = thf.tour_id
LEFT JOIN facilities f ON thf.facility_id = f.id
LEFT JOIN tour_images ti ON t.id = ti.tour_id AND ti.is_deleted = FALSE
WHERE t.id = ? AND t.is_deleted = FALSE;

    `,
      [tourPacketId]
    );

    if (tourDetails.length === 0) {
      return res.status(404).json({
        message: "Not Found",
        error: "Tour not found or has been deleted",
      });
    }

    // Retrieve reviews for the tour packet
    const reviews = await dbExecute(
      `
      SELECT
          rating
      FROM reviews
      WHERE review_type_id = (SELECT id FROM review_types WHERE name = 'TOUR_PACKET') AND item_id = ?
      AND is_deleted = FALSE
    `,
      [tourPacketId]
    );

    // Calculate average rating
    let totalRating = 0;
    let averageRating = 0;

    if (reviews.length > 0) {
      totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
      averageRating = totalRating / reviews.length;
    }

    // Continue with processing the retrieved tourDetails
    const formattedTourDetails = {
      title: tourDetails[0]?.title,
      slug: tourDetails[0]?.slug,
      categories: tourDetails[0]?.categories,
      price: tourDetails[0]?.price,
      address: tourDetails[0]?.address,
      address_link: tourDetails[0]?.address_link,
      description: tourDetails[0]?.description,
      ticket_operasional: tourDetails[0]?.ticket_operasional,
      images: tourDetails
        .map((detail) => detail?.image_path)
        .filter((path) => path !== null),
      facilities: tourDetails
        .map((detail) => detail?.facility_name)
        .filter((name) => name !== null),
      averageRating: averageRating,
    };

    res.status(200).json({
      message: "Tour details retrieved successfully",
      data: formattedTourDetails,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
}

async function editTour(req, res) {
  try {
    // Begin a database transaction
    await dbExecute("START TRANSACTION");

    let errors = {};
    const tourId = req.params.id;

    // Save temp data
    const tourData = {
      title: req.title,
      slug: req.slug,
      categories: req.categories,
      price: req.price,
      address: req.address,
      address_link: req.address_link,
      description: req.description,
      ticket_operasional: req.ticket_operasional,
      facilities: req.facilities,
    };

    // Validate data
    newTourValidation(tourData);

    // Validate if slug already exists (excluding the current tour)
    const checkSlug = await dbExecute(
      "SELECT id FROM tours WHERE slug = ? AND id != ?",
      [tourData.slug, tourId]
    );

    if (checkSlug.length > 0) {
      errors.slug = "Slug already in use, please choose another!";
      return res.status(400).json({
        message: "error",
        errors: errors,
      });
    }

    // Get the paths of existing images associated with the tour
    const existingImages = await dbExecute(
      "SELECT img_path FROM tour_images WHERE tour_id = ?",
      [tourId]
    );

    // Delete existing images using unlink
    for (const imgPath of existingImages) {
      const imagePath = path.join(__dirname, "../public", imgPath.img_path);
      await fs.unlink(imagePath);
    }

    // Upload files (if there are new images)
    if (req.image_path && req.image_path.length > 0) {
      await handleImageUpload("images", 5)(req, res);

      // Check if handleImageUpload encountered an error
      if (res.headersSent) {
        // Rollback the transaction if there was an error during image upload
        await dbExecute("ROLLBACK", []);
        return;
      }

      // Save new images to the 'tour_images' table
      for (const imgPath of req.image_path) {
        await dbExecute(
          `INSERT INTO tour_images (id_uuid, tour_id, img_path, created_at) VALUES (?, ?, ?, ?)`,
          [uuidv4(), tourId, imgPath, new Date()]
        );
      }
    }

    // Continue with updating the tour details in the 'tours' table
    await dbExecute(
      `UPDATE tours SET title=?, slug=?, categories=?, price=?, address=?, address_link=?, description=?, ticket_operasional=? WHERE id=?`,
      [
        tourData.title,
        tourData.slug,
        tourData.categories,
        tourData.price,
        tourData.address,
        tourData.address_link,
        tourData.description,
        tourData.ticket_operasional,
        tourId,
      ]
    );

    // Iterate over facilities and update 'tour_has_facilities' table
    await dbExecute("DELETE FROM tour_has_facilities WHERE tour_id = ?", [
      tourId,
    ]);

    const facilities = Array.isArray(req.facilities)
      ? req.facilities
      : [req.facilities];
    for (const facility of facilities) {
      await dbExecute(
        `INSERT INTO tour_has_facilities (tour_id, facility_id, created_at) VALUES (?, ?, ?)`,
        [tourId, facility, new Date()]
      );
    }

    // Commit the transaction
    await dbExecute("COMMIT", []);

    // Check if headers are sent before sending the response
    if (!res.headersSent) {
      res.status(200).json({ message: "Data wisata telah diupdate!" });
    }
  } catch (error) {
    console.error(error);

    // Rollback the transaction in case of an error
    await dbExecute("ROLLBACK", []);

    res.status(500).json({ message: "Internal Server Error!" });
  }
}

async function deleteTour(req, res) {
  const tourId = req.params.id;

  try {
    // Soft delete tour by setting is_deleted to TRUE
    const deleteResult = await dbExecute(
      `
        UPDATE tours
        SET is_deleted = TRUE
        WHERE slug = ? AND is_deleted = FALSE
    `,
      [tourId]
    );

    if (deleteResult.affectedRows === 0) {
      return res.status(404).json({
        message: "Not Found",
        error: "Tour not found or has already been deleted",
      });
    }

    res.status(200).json({
      message: "Tour soft deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
}

module.exports = {
  newTour,
  saveTour,
  indexTour,
  detailTour,
  editTour,
  deleteTour,
};
