const dbExecute = require("../config/db");
const newTourPacketValidation = require("../request/TourPacketRequest");
const validator = require("validator");
const fs = require("fs/promises");
const path = require("path");
const { validationResult } = require("express-validator");

const newTourPacket = async (req, res) => {
  try {
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
  } catch (error) {}
};

const saveTourPacket = async (req, res) => {
  let errors = {};
  try {
    // save temp data
    const tourPacketData = {
      title: req.title,
      slug: req.slug,
      price: req.price,
      address: req.address,
      address_link: req.address_link,
      description: req.description,
      tour_description: req.tour_description,
      tour_link: req.tour_link,
      culinary_description: req.culinary_description,
      culinary_link: req.culinary_link,
      lodging_description: req.lodging_description,
      lodging_link: req.lodging_link,
      tour_facilities: req.tour_facilities,
      culinary_facilities: req.culinary_facilities,
      lodging_facilities: req.lodging_facilities,
    };

    //   Validate data
    newTourPacketValidation(tourPacketData);

    //   Validate if slug if already existed
    const checkSlug = await dbExecute(
      "SELECT slug FROM tour_packets where id = ?",
      [tourId.slug]
    );

    if (checkSlug.length > 1) {
      return res.status(400).json({
        message: "error",
        errors: errors.slug("Slug sudah dipakai, silahkan ganti!"),
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
    const tour_facilities = Array.isArray(req.tour_facilities)
      ? req.tour_facilities
      : [req.tour_facilities];

    const culinary_facilities = Array.isArray(req.culinary_facilities)
      ? req.culinary_facilities
      : [req.culinary_facilities];

    const lodging_facilities = Array.isArray(req.lodging_facilities)
      ? req.lodging_facilities
      : [req.lodging_facilities];

    // Save tour data to the 'tours' table
    const tourInsertResult = await dbExecute(
      `INSERT INTO tour_packets (title, slug, price, address, address_link, description, tour_description, tour_link,culinary_description, culinary_link, lodging_description, lodging_link, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        tourData.title,
        tourData.slug,
        tourData.categories,
        tourData.price,
        tourData.address,
        tourData.address_link,
        tourData.description,
        tourData.tour_description,
        tourData.tour_link,
        tourData.culinary_description,
        tourData.culinary_link,
        tourData.lodging_description,
        tourData.lodging_link,
        new Date(),
      ]
    );

    // Get ID new inserted tour
    const tourId = tourInsertResult.insertId;

    // Iterate over facilities and save each one to tour_has_facilities table
    for (const facility of tour_facilities) {
      await dbExecute(
        `INSERT INTO tour_packets_tour_facilities (tour_packet_id, facility_id, created_at) VALUES (?, ?, ?)`,
        [tourId, facility, new Date()]
      );
    }

    for (const facility of culinary_facilities) {
      await dbExecute(
        `INSERT INTO tour_packets_culinary_facilities (tour_packet_id, facility_id, created_at) VALUES (?, ?, ?)`,
        [tourId, facility, new Date()]
      );
    }

    for (const facility of lodging_facilities) {
      await dbExecute(
        `INSERT INTO tour_packets_lodging_facilities (tour_packet_id, facility_id, created_at) VALUES (?, ?, ?)`,
        [tourId, facility, new Date()]
      );
    }

    // Iterate over req.image_path and save each path to the 'tour_images' table
    for (const imgPath of req.image_path) {
      await dbExecute(
        `INSERT INTO tour_packets_images (id_uuid, tour_id, img_path, created_at) VALUES (?, ?, ?, ?)`,
        [uuidv4(), tourId, imgPath, new Date()]
      );
    }

    res.status(201).json({
      message: "Packet Tour, facilities, and images saved successfully!",
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ message: "Internal Server Error!" });
  }
};

const getOnePacketTour = async (req, res) => {
  const tourId = req.params.id;

  try {
    const tourDetails = await dbExecute(
      `
    SELECT
    tp.title,
    tp.slug,
    tp.price,
    tp.address,
    tp.address_link,
    tp.description,
    tp.tour_description,
    tp.tour_link,
    tp.culinary_description,
    tp.culinary_link,
    tp.lodging_description,
    tp.lodging_link,
    tp.created_at,
    MAX(tpi.img_path) AS img_path,
    MAX(tf_t.name) AS tour_facility_name,
    MAX(cf.name) AS culinary_facility_name,
    MAX(lf.name) AS lodging_facility_name
FROM
    tour_packets tp
LEFT JOIN
    tour_packets_images tpi ON tp.id = tpi.tour_packet_id AND tpi.is_deleted = FALSE
LEFT JOIN
    tour_packets_tour_facilities tptf ON tp.id = tptf.tour_packet_id
LEFT JOIN
    facilities tf_t ON tptf.facility_id = tf_t.id
LEFT JOIN
    tour_packets_culinary_facilities tpcf ON tp.id = tpcf.tour_packet_id
LEFT JOIN
    facilities cf ON tpcf.facility_id = cf.id
LEFT JOIN
    tour_packets_lodging_facilities tplf ON tp.id = tplf.tour_packet_id
LEFT JOIN
    facilities lf ON tplf.facility_id = lf.id
WHERE
    tp.id = ? AND tp.is_deleted = FALSE
GROUP BY
    tp.id;

  `,
      [tourId]
    );

    if (tourDetails.length === 0) {
      return res.status(404).json({
        message: "Not Found",
        error: "Tour packet not found or has been deleted",
      });
    }

    // Calculate average rating in Node.js
    const reviews = await dbExecute(
      `
    SELECT
        rating
    FROM
        reviews
    WHERE
        review_type_id = 2 AND
        item_id = ?
        AND is_deleted = FALSE;
  `,
      [tourDetails[0].id]
    );

    const averageRating = calculateAverageRating(reviews);

    // Continue with processing the retrieved tourDetails
    const formattedTourDetails = {
      title: tourDetails[0]?.title,
      slug: tourDetails[0]?.slug,
      price: tourDetails[0]?.price,
      address: tourDetails[0]?.address,
      address_link: tourDetails[0]?.address_link,
      description: tourDetails[0]?.description,
      tour_description: tourDetails[0]?.tour_description,
      tour_link: tourDetails[0]?.tour_link,
      culinary_description: tourDetails[0]?.culinary_description,
      culinary_link: tourDetails[0]?.culinary_link,
      lodging_description: tourDetails[0]?.lodging_description,
      lodging_link: tourDetails[0]?.lodging_link,
      created_at: tourDetails[0]?.created_at,
      img_path: tourDetails[0]?.img_path,
      tour_facility_name: tourDetails[0]?.tour_facility_name,
      culinary_facility_name: tourDetails[0]?.culinary_facility_name,
      lodging_facility_name: tourDetails[0]?.lodging_facility_name,
      averageRating: averageRating,
    };

    res.status(200).json({
      message: "Tour packet details retrieved successfully",
      data: formattedTourDetails,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }

  function calculateAverageRating(reviews) {
    if (reviews.length === 0) {
      return 0;
    }

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;
    return averageRating;
  }
};

const getAllTourPackets = async (req, res) => {
  try {
    const allTourPacketsDetails = await dbExecute(`
      SELECT
          tp.id,
          tp.title,
          tp.slug,
          tp.price,
          tp.address,
          tp.address_link,
          tp.description,
          tp.tour_description,
          tp.tour_link,
          tp.culinary_description,
          tp.culinary_link,
          tp.lodging_description,
          tp.lodging_link,
          tp.created_at
      FROM tour_packets tp
      WHERE tp.is_deleted = FALSE
    `);

    const tourPacketsWithReviews = [];

    // Iterate over each tour packet and fetch reviews
    for (const tourPacket of allTourPacketsDetails) {
      const reviews = await dbExecute(
        "SELECT rating FROM reviews WHERE review_type_id = ? AND item_id = ? AND is_deleted = FALSE",
        [2, tourPacket.id] // Assuming review_type_id for TOUR_PACKET is 2
      );

      const averageRating =
        reviews.length > 0
          ? reviews.reduce((sum, review) => sum + review.rating, 0) /
            reviews.length
          : 0;

      tourPacketsWithReviews.push({
        ...tourPacket,
        averageRating,
      });
    }

    // Format the data for response
    const formattedAllTourPacketsDetails = tourPacketsWithReviews.map(
      (tourPacket) => ({
        id: tourPacket.id,
        title: tourPacket.title,
        slug: tourPacket.slug,
        price: tourPacket.price,
        address: tourPacket.address,
        address_link: tourPacket.address_link,
        description: tourPacket.description,
        tour_description: tourPacket.tour_description,
        tour_link: tourPacket.tour_link,
        culinary_description: tourPacket.culinary_description,
        culinary_link: tourPacket.culinary_link,
        lodging_description: tourPacket.lodging_description,
        lodging_link: tourPacket.lodging_link,
        created_at: tourPacket.created_at,
        averageRating: tourPacket.averageRating || 0,
      })
    );

    res.status(200).json({
      message: "Success",
      data: formattedAllTourPacketsDetails,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const editPacketTour = async (req, res) => {
  let errors = {};
  const tourPacketId = req.params.id;

  try {
    // save temp data
    const tourPacketData = {
      title: req.title,
      slug: req.slug,
      price: req.price,
      address: req.address,
      address_link: req.address_link,
      description: req.description,
      tour_description: req.tour_description,
      tour_link: req.tour_link,
      culinary_description: req.culinary_description,
      culinary_link: req.culinary_link,
      lodging_description: req.lodging_description,
      lodging_link: req.lodging_link,
      tour_facilities: req.tour_facilities,
      culinary_facilities: req.culinary_facilities,
      lodging_facilities: req.lodging_facilities,
    };

    //   Validate data
    newTourPacketValidation(tourPacketData);

    // Validate if slug already exists for other tour packets
    const existingSlugCheck = await dbExecute(
      "SELECT slug FROM tour_packets WHERE slug = ? AND id != ?",
      [tourPacketData.slug, tourPacketId]
    );

    if (existingSlugCheck.length > 0) {
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

    // Unlink old images
    await unlinkOldImages(req.image_path);

    // Upload new images
    const newImagePaths = await uploadNewImages(req.files);

    // Save tour data to the 'tour_packets' table
    const tourInsertResult = await dbExecute(
      `INSERT INTO tour_packets (title, slug, price, address, address_link, description, tour_description, tour_link, culinary_description, culinary_link, lodging_description, lodging_link, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        // existing parameters
        new Date(),
      ]
    );

    // Get the ID of the newly inserted tour packet
    const tourId = tourInsertResult.insertId;

    // Save facilities to respective tables
    await saveFacilitiesToTable(
      tourId,
      "tour_packets_tour_facilities",
      tourPacketData.tour_facilities
    );

    await saveFacilitiesToTable(
      tourId,
      "tour_packets_culinary_facilities",
      tourPacketData.culinary_facilities
    );

    await saveFacilitiesToTable(
      tourId,
      "tour_packets_lodging_facilities",
      tourPacketData.lodging_facilities
    );

    // Save image paths to 'tour_packets_images' table
    await saveImagePathsToTable(tourId, newImagePaths);

    res.status(201).json({
      message: "Packet Tour, facilities, and images saved successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

// Helper function to unlink old images
async function unlinkOldImages(imgPaths) {
  if (imgPaths && imgPaths.length > 0) {
    for (const imgPath of imgPaths) {
      const imagePath = path.join(
        __dirname,
        "your_image_upload_directory",
        imgPath
      );
      await fs.unlink(imagePath);
    }
  }
}

// Helper function to upload new images
async function uploadNewImages(files) {
  const newImagePaths = [];

  if (files && files.length > 0) {
    for (const file of files) {
      const newImagePath = `your_image_upload_directory/${file.filename}`;
      newImagePaths.push(newImagePath);
    }
  }

  return newImagePaths;
}

// Helper function to save facilities to a specific table
async function saveFacilitiesToTable(tourId, tableName, facilities) {
  if (facilities && facilities.length > 0) {
    for (const facility of facilities) {
      await dbExecute(
        `INSERT INTO ${tableName} (tour_packet_id, facility_id, created_at) VALUES (?, ?, ?)`,
        [tourId, facility, new Date()]
      );
    }
  }
}

// Helper function to save image paths to the 'tour_packets_images' table
async function saveImagePathsToTable(tourId, imagePaths) {
  if (imagePaths && imagePaths.length > 0) {
    for (const imgPath of imagePaths) {
      await dbExecute(
        `INSERT INTO tour_packets_images (id_uuid, tour_packet_id, img_path, created_at) VALUES (?, ?, ?, ?)`,
        [uuidv4(), tourId, imgPath, new Date()]
      );
    }
  }
}

// Helper function to upload new images
async function uploadNewImages(files) {
  const newImagePaths = [];

  if (files && files.length > 0) {
    for (const file of files) {
      const newImagePath = `your_image_upload_directory/${file.filename}`;
      newImagePaths.push(newImagePath);
    }
  }

  return newImagePaths;
}

// Helper function to save facilities to a specific table
async function saveFacilitiesToTable(tourId, tableName, facilities) {
  if (facilities && facilities.length > 0) {
    for (const facility of facilities) {
      await dbExecute(
        `INSERT INTO ${tableName} (tour_packet_id, facility_id, created_at) VALUES (?, ?, ?)`,
        [tourId, facility, new Date()]
      );
    }
  }
}

// Helper function to save image paths to the 'tour_packets_images' table
async function saveImagePathsToTable(tourId, imagePaths) {
  if (imagePaths && imagePaths.length > 0) {
    for (const imgPath of imagePaths) {
      await dbExecute(
        `INSERT INTO tour_packets_images (id_uuid, tour_packet_id, img_path, created_at) VALUES (?, ?, ?, ?)`,
        [uuidv4(), tourId, imgPath, new Date()]
      );
    }
  }
}

const deleteTourPacket = async (req, res) => {
  try {
    const tourPacketId = req.params.id;

    // Check if the tour packet exists
    const existingTourPacket = await dbExecute(
      "SELECT * FROM tour_packets WHERE id = ? AND is_deleted = FALSE",
      [tourPacketId]
    );

    if (existingTourPacket.length === 0) {
      return res.status(404).json({
        message: "Not Found",
        error: "Paket wisata tidak ditemukan atau telah dihapus!",
      });
    }

    // Soft delete the tour packet
    await dbExecute(
      "UPDATE tour_packets SET is_deleted = TRUE, updated_at = ? WHERE id = ?",
      [new Date(), tourPacketId]
    );

    res.status(200).json({
      message: "Paket wisata berhasil dihapus!",
      data: existingTourPacket[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

module.exports = {
  getAllTourPackets,
  getOnePacketTour,
  newTourPacket,
  editPacketTour,
  deleteTourPacket,
  saveTourPacket,
};
