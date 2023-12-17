const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const path = require("path");
const { query, db } = require("../config/database");
const toDatetime = require("../utils/datetime");
const generateSlug = require("../utils/generateSlug");
const fs = require("fs/promises");

// TOUR PACKET
const getCreateTourPacket = asyncHandler(async (req, res) => {
  console.log(req);
  res.json({ success: true, message: "Ok" });
});

const createTourPacket = asyncHandler(async (req, res) => {
  console.log(req.body);
  const {
    title,
    slug,
    price,
    address,
    address_link,
    description,
    tour_description,
    tour_link,
    culinary_description,
    culinary_link,
    lodging_description,
    lodging_link,
  } = req.body;
  const formatSlug = generateSlug(slug);

  console.log(parseInt(price[1]));
  try {
    const checkslug = await db.query(
      "SELECT slug FROM tour_packets where slug = ?",
      [slug]
    );

    if (checkslug.length > 1) {
      return res.status(400).json({
        success: false,
        message: "Slug sudah dipakai, silahkan ganti!",
      });
    }

    let newDatetime = toDatetime(Date.now());
    const data = await query(
      `INSERT INTO tour_packets (title, slug, price, address, address_link, description, tour_description, tour_link, culinary_description, culinary_link, lodging_description, lodging_link, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        formatSlug,
        parseInt(price[1]),
        address,
        address_link,
        description,
        tour_description,
        tour_link,
        culinary_description,
        culinary_link,
        lodging_description,
        lodging_link,
        newDatetime,
        newDatetime,
      ]
    );

    if (!data.length > 0) {
      res.json({
        success: false,
        message: "Paket wisata gagal dibuat!",
        data: "",
      });
    }

    res.json({
      success: true,
      message: "Paket wisata telah dibuat!",
      data: "",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error!" });
    throw new Error("Error saat menyimpan data paket wisata!");
  }
  res.json({ success: true, message: "Ok" });
});

const updateTourPacket = asyncHandler(async (req, res) => {
  const {
    title,
    slug,
    price,
    address,
    address_link,
    description,
    tour_description,
    tour_link,
    culinary_description,
    culinary_link,
    lodging_description,
    lodging_link,
  } = req.body;

  const formatSlug = generateSlug(slug);

  try {
    // Check if the given slug exists in the database
    const checkSlug = await db.query(
      "SELECT slug FROM tour_packets WHERE slug = ? AND id != ?",
      [formatSlug, req.params.id]
    );

    if (checkSlug.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Slug sudah dipakai, silahkan ganti!",
      });
    }

    // Update the tour packet based on the provided ID
    const newDatetime = toDatetime(Date.now());
    const data = await query(
      `UPDATE tour_packets SET 
        title = ?, 
        slug = ?, 
        price = ?, 
        address = ?, 
        address_link = ?, 
        description = ?, 
        tour_description = ?, 
        tour_link = ?, 
        culinary_description = ?, 
        culinary_link = ?, 
        lodging_description = ?, 
        lodging_link = ?, 
        updated_at = ? 
        WHERE id = ?`,
      [
        title,
        formatSlug,
        parseInt(price[1]),
        address,
        address_link,
        description,
        tour_description,
        tour_link,
        culinary_description,
        culinary_link,
        lodging_description,
        lodging_link,
        newDatetime,
        req.params.id,
      ]
    );

    if (!data.affectedRows) {
      return res.json({
        success: false,
        message: "Paket wisata tidak ditemukan!",
      });
    }

    return res.json({
      success: true,
      message: "Paket wisata berhasil diperbarui!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
    throw new Error("Error saat mengubah data paket penginapan");
  }
});

const deleteTourPacket = asyncHandler(async (req, res) => {
  try {
    // Update the tour packet by setting is_deleted to true
    const newDatetime = toDatetime(Date.now());
    const data = await query(
      `UPDATE tour_packets SET is_deleted = true, updated_at = ? WHERE id = ?`,
      [newDatetime, req.params.id]
    );

    if (!data.affectedRows) {
      return res.json({
        success: false,
        message: "Paket wisata tidak ditemukan!",
      });
    }

    return res.json({
      success: true,
      message: "Paket wisata berhasil dihapus!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
    throw new Error("Error saat menghapus data paket penginapan");
  }
});

const getOneTourPacket = asyncHandler(async (req, res) => {
  const { id, slug } = req.body;
  try {
    const tourDetails = await query(
      `
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
      [id]
    );

    if (tourDetails.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Paket wisata tidak ditemukan atau telah dihapus!",
      });
    }

    // Calculate average rating
    const reviews = await query(
      `
    SELECT
        rating
    FROM
        tour_packet_has_reviews
    WHERE
        tour_packet_id = ?
        AND is_deleted = FALSE;
  `,
      [tourDetails[0].id]
    );
    // calculate reviews
    function calculateAverageRating(reviews) {
      if (reviews.length === 0) {
        return 0;
      }

      const totalRating = reviews.reduce(
        (sum, review) => sum + review.rating,
        0
      );
      const averageRating = totalRating / reviews.length;
      return averageRating;
    }

    const averageRating = calculateAverageRating(reviews);

    // Format for the client
    const formattedTourDetails = {
      id: tourDetails[0]?.id,
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
      success: true,
      message: "Ok",
      data: formattedTourDetails,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
    throw new Error("Gagal saat mengambil data satu paket wisata!");
  }
});

const getAllTourPacket = asyncHandler(async (req, res) => {
  try {
    const allTourPacketsDetails = await query(`
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
        "SELECT rating FROM tour_packet_has_reviews WHERE tour_packet_id = ? AND is_deleted = FALSE",
        [tourPacket.id]
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
      success: true,
      message: "Success",
      data: formattedAllTourPacketsDetails,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
    throw new Error("Eror saat mengambil semua data paket wisata!");
  }
});

// IMAGE UPLOADS
const uploadImages = asyncHandler(async (req, res) => {
  try {
    // Check if no files were uploaded
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Silahkan upload gambar!",
      });
    }

    // Check if any files were rejected
    if (req.files.some((file) => !file.fieldname)) {
      return res.status(400).json({
        success: false,
        message: "File tidak didukung!",
      });
    }

    const { id } = req.body;
    if (!id || id === null) {
      return res.status(400).json({
        success: false,
        message: "Tidak ada ID!",
      });
    }

    // Access the file details using req.files
    const imagePaths = req.files.map((file) =>
      path.join(__dirname, "public", `/${file.filename}`)
    );

    // Your logic to save data in the database
    const allImages = await Promise.all(
      imagePaths.map(async (image) => {
        try {
          const data = await query(
            `INSERT INTO tour_packets_images (id_uuid, tour_packet_id, img_path) VALUES (?, ?, ?)`,
            [uuidv4(), id, image]
          );

          return data;
        } catch (insertError) {
          console.error(
            `Error inserting image into the database: ${insertError.message}`
          );
          throw insertError; // Rethrow the error to trigger the catch block below
        }
      })
    );

    if (allImages.every((data) => data.length > 0)) {
      return res.json({
        success: true,
        message: "Gambar fasilitas paket wisata ditambahkan!",
      });
    } else {
      // Rollback: Delete all images from server
      await Promise.all(
        imagePaths.map(async (imagePath) => {
          try {
            await fs.unlink(imagePath);
            console.log(`File ${imagePath} deleted successfully.`);
          } catch (deleteError) {
            console.error(
              `Error deleting file ${imagePath}: ${deleteError.message}`
            );
          }
        })
      );

      return res.json({
        success: false,
        message: "Gambar paket wisata gagal ditambahkan!",
      });
    }
  } catch (error) {
    console.error(`Error handling image upload: ${error.message}`);

    // Rollback: Delete all images from server
    await Promise.all(
      imagePaths.map(async (imagePath) => {
        try {
          await fs.unlink(imagePath);
          console.log(`File ${imagePath} deleted successfully.`);
        } catch (deleteError) {
          console.error(
            `Error deleting file ${imagePath}: ${deleteError.message}`
          );
        }
      })
    );

    res.json({
      success: false,
      message: "Gambar paket wisata gagal ditambahkan!",
    });

    throw new Error("Gambar paket wisata gagal ditambahkan!");
  }
});

const updateImages = asyncHandler(async (req, res) => {
  try {
    const { id } = req.body;
    if (!id || id === null) {
      return res.status(400).json({
        success: false,
        message: "Tidak ada ID!",
      });
    }

    // Delete old images associated with the tour ID
    const oldImages = await query(
      `SELECT img_path FROM tour_packets_images WHERE tour_packet_id = ?`,
      [id]
    );

    await Promise.all(
      oldImages.map(async (oldImage) => {
        const fullPath = path.join(__dirname, "public", oldImage.img_path);
        try {
          await fs.unlink(fullPath);
          console.log(`Old image ${fullPath} deleted successfully.`);
        } catch (deleteError) {
          console.error(
            `Error deleting old image ${fullPath}: ${deleteError.message}`
          );
        }
      })
    );

    // Access the file details using req.files
    const newImagePaths = req.files.map((file) =>
      path.join(__dirname, "public", `/${file.filename}`)
    );

    // Your logic to save data in the database
    const allImages = await Promise.all(
      newImagePaths.map(async (image) => {
        try {
          const data = await query(
            `INSERT INTO tour_packets_images (id_uuid, tour_packet_id, img_path) VALUES (?, ?, ?)`,
            [uuidv4(), id, image]
          );
          return data;
        } catch (insertError) {
          console.error(
            `Error inserting new image into the database: ${insertError.message}`
          );
          throw insertError;
        }
      })
    );

    await query(`DELETE FROM tour_packets_images WHERE tour_packet_id = ?`, [
      id,
    ]);

    if (allImages.every((data) => data.length > 0)) {
      return res.json({
        success: true,
        message: "Gambar fasilitas paket wisata diperbarui!",
      });
    } else {
      // Rollback: Delete all newly uploaded images
      await Promise.all(
        newImagePaths.map(async (newImagePath) => {
          try {
            await fs.unlink(newImagePath);
            console.log(
              `Newly uploaded image ${newImagePath} deleted successfully.`
            );
          } catch (deleteError) {
            console.error(
              `Error deleting newly uploaded image ${newImagePath}: ${deleteError.message}`
            );
          }
        })
      );

      return res.json({
        success: false,
        message: "Gambar paket wisata gagal diperbarui!",
      });
    }
  } catch (error) {
    console.error(`Error handling image update: ${error.message}`);

    // Rollback: Delete all newly uploaded images
    await Promise.all(
      newImagePaths.map(async (newImagePath) => {
        try {
          await fs.unlink(newImagePath);
          console.log(
            `Newly uploaded image ${newImagePath} deleted successfully.`
          );
        } catch (deleteError) {
          console.error(
            `Error deleting newly uploaded image ${newImagePath}: ${deleteError.message}`
          );
        }
      })
    );

    res.json({
      success: false,
      message: "Gambar paket wisata gagal diperbarui!",
    });

    throw new Error("Gambar paket wisata gagal diperbarui!");
  }
});

// FASILITAS UNTUK PAKET WISATA, KULINER, PENGINAPAN DALAM PAKET WISATA
const getAllFacilities = asyncHandler(async (req, res) => {
  try {
    const data = await query(
      `SELECT id,name FROM facilities WHERE is_deleted = false`
    );
    res.json({
      success: true,
      message: "ok",
      data: { facilities: data },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
    throw new Error(
      "Eror saat mengambil semua data fasilitas di paket wisata!"
    );
  }
});

// TOUR FACILITIES POST AND PUT (CREATE AND UPDATE)
const addTourFacility = asyncHandler(async (req, res) => {
  const { facilities, id } = req.body;

  if (
    !facilities ||
    !Array.isArray(facilities) ||
    facilities.length === 0 ||
    !id
  ) {
    return res.status(400).json({
      success: false,
      message: "Silahkan isi pilih fasilitas dengan benar!",
    });
  }

  try {
    const facilityInsertPromises = facilities.map(async (facility) => {
      const data = await query(
        `INSERT INTO tour_packets_tour_facilities (tour_packet_id, facility_id) VALUES (?, ?)`,
        [id, facility]
      );

      return data;
    });

    const insertedData = await Promise.all(facilityInsertPromises);

    if (insertedData.every((data) => data.length > 0)) {
      return res.json({
        success: true,
        message: "Fasilitas wisata, paket wisata ditambahkan!",
      });
    } else {
      return res.json({
        success: false,
        message: "Fasilitas wisata, paket wisata gagal ditambahkan!",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
    throw new Error(
      "Error saat menyimpan data fasilitas wisata di paket wisata!"
    );
  }
});

const updateTourFacility = asyncHandler(async (req, res) => {
  const { facilities, id } = req.body;

  if (
    !facilities ||
    !Array.isArray(facilities) ||
    facilities.length === 0 ||
    !id
  ) {
    return res.status(400).json({
      success: false,
      message: "Silahkan isi pilih fasilitas dengan benar!",
    });
  }

  try {
    // Delete existing entries for the given id
    await query(
      `DELETE FROM tour_packets_tour_facilities WHERE tour_packet_id = ?`,
      [id]
    );

    // Insert new facilities
    const facilityInsertPromises = facilities.map(async (facility) => {
      const data = await query(
        `INSERT INTO tour_packets_tour_facilities (tour_packet_id, facility_id) VALUES (?, ?)`,
        [id, facility]
      );

      return data;
    });

    const insertedData = await Promise.all(facilityInsertPromises);

    if (insertedData.every((data) => data.length > 0)) {
      return res.json({
        success: true,
        message: "Fasilitas wisata, paket wisata diperbarui!",
      });
    } else {
      return res.json({
        success: false,
        message: "Fasilitas wisata, paket wisata gagal diperbarui!",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
    throw new Error(
      "Error saat mengubah data fasilitas wisata di paket wisata!"
    );
  }
});

// CULINARY FACILITIES POST AND PUT (CREATE AND UPDATE)
const addCulinaryFacility = asyncHandler(async (req, res) => {
  const { facilities, id } = req.body;

  if (
    !facilities ||
    !Array.isArray(facilities) ||
    facilities.length === 0 ||
    !id
  ) {
    return res.status(400).json({
      success: false,
      message: "Silahkan isi pilih fasilitas dengan benar!",
    });
  }

  try {
    const facilityInsertPromises = facilities.map(async (facility) => {
      const data = await query(
        `INSERT INTO tour_packets_culinary_facilities (tour_packet_id, facility_id) VALUES (?, ?)`,
        [id, facility]
      );

      return data;
    });

    const insertedData = await Promise.all(facilityInsertPromises);

    if (insertedData.every((data) => data.length > 0)) {
      return res.json({
        success: true,
        message: "Fasilitas kuliner, paket wisata ditambahkan!",
      });
    } else {
      return res.json({
        success: false,
        message: "Fasilitas kuliner, paket wisata gagal ditambahkan!",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
    throw new Error(
      "Error saat menyimpan data fasilitas wisata di paket wisata!"
    );
  }
});

const updateCulinaryFacilities = asyncHandler(async (req, res) => {
  const { facilities, id } = req.body;

  if (
    !facilities ||
    !Array.isArray(facilities) ||
    facilities.length === 0 ||
    !id
  ) {
    return res.status(400).json({
      success: false,
      message: "Silahkan isi pilih fasilitas dengan benar!",
    });
  }

  try {
    // Delete existing entries for the given id
    await query(
      `DELETE FROM tour_packets_culinary_facilities WHERE tour_packet_id = ?`,
      [id]
    );

    // Insert new facilities
    const facilityInsertPromises = facilities.map(async (facility) => {
      const data = await query(
        `INSERT INTO tour_packets_culinary_facilities (tour_packet_id, facility_id) VALUES (?, ?)`,
        [id, facility]
      );

      return data;
    });

    const insertedData = await Promise.all(facilityInsertPromises);

    if (insertedData.every((data) => data.length > 0)) {
      return res.json({
        success: true,
        message: "Fasilitas kuliner, paket wisata diperbarui!",
      });
    } else {
      return res.json({
        success: false,
        message: "Fasilitas kuliner, paket wisata gagal diperbarui!",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
    throw new Error(
      "Error saat mengubah data fasilitas kuliner di paket wisata!"
    );
  }
});

// LODGING FACILITIES POST AND PUT (CREATE AND UPDATE)
const addLodgingFacility = asyncHandler(async (req, res) => {
  const { facilities, id } = req.body;

  if (
    !facilities ||
    !Array.isArray(facilities) ||
    facilities.length === 0 ||
    !id
  ) {
    return res.status(400).json({
      success: false,
      message: "Silahkan isi pilih fasilitas dengan benar!",
    });
  }

  try {
    const facilityInsertPromises = facilities.map(async (facility) => {
      const data = await query(
        `INSERT INTO tour_packets_lodging_facilities (tour_packet_id, facility_id) VALUES (?, ?)`,
        [id, facility]
      );

      return data;
    });

    const insertedData = await Promise.all(facilityInsertPromises);

    if (insertedData.every((data) => data.length > 0)) {
      return res.json({
        success: true,
        message: "Fasilitas penginapan, paket wisata ditambahkan!",
      });
    } else {
      return res.json({
        success: false,
        message: "Fasilitas penginapan, paket wisata gagal ditambahkan!",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
    throw new Error(
      "Error saat menyimpan data fasilitas penginapan di paket wisata!"
    );
  }
});

const updateLodgingFacilities = asyncHandler(async (req, res) => {
  const { facilities, id } = req.body;

  if (
    !facilities ||
    !Array.isArray(facilities) ||
    facilities.length === 0 ||
    !id
  ) {
    return res.status(400).json({
      success: false,
      message: "Silahkan isi pilih fasilitas dengan benar!",
    });
  }

  try {
    // Delete existing entries for the given id
    await query(
      `DELETE FROM tour_packets_lodging_facilities WHERE tour_packet_id = ?`,
      [id]
    );

    // Insert new facilities
    const facilityInsertPromises = facilities.map(async (facility) => {
      const data = await query(
        `INSERT INTO tour_packets_lodging_facilities (tour_packet_id, facility_id) VALUES (?, ?)`,
        [id, facility]
      );

      return data;
    });

    const insertedData = await Promise.all(facilityInsertPromises);

    if (insertedData.every((data) => data.length > 0)) {
      return res.json({
        success: true,
        message: "Fasilitas penginapan, paket wisata diperbarui!",
      });
    } else {
      return res.json({
        success: false,
        message: "Fasilitas penginapan, paket wisata gagal diperbarui!",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
    throw new Error(
      "Error saat mengubah data fasilitas penginapan di paket wisata!"
    );
  }
});

module.exports = {
  getCreateTourPacket,
  createTourPacket,
  updateTourPacket,
  deleteTourPacket,
  getAllTourPacket,
  getOneTourPacket,
  uploadImages,
  updateImages,
  addTourFacility,
  updateTourFacility,
  addCulinaryFacility,
  updateCulinaryFacilities,
  addLodgingFacility,
  updateLodgingFacilities,
  getAllFacilities,
};
