const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const path = require("path");
const fs = require("fs/promises");
const jwt = require("jsonwebtoken");
const { query, db } = require("../config/database");
const toDatetime = require("../utils/datetime");
const { SECRET, DB_USER } = require("../config/configs");
const generateSlug = require("../utils/generateSlug");

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

const getOneTourPacket = asyncHandler(async (req, res) => {});

const getAllTourPacket = asyncHandler(async (req, res) => {});

// IMAGE UPLOADS
const uploadImages = asyncHandler(async (req, res) => {});

const updateImages = asyncHandler(async (req, res) => {});

// TOUR FACILITIES POST AND PUT (CREATE AND UPDATE)

// CULINARY FACILITIES POST AND PUT (CREATE AND UPDATE)

// LODGING FACILITIES POST AND PUT (CREATE AND UPDATE)

module.exports = {
  getCreateTourPacket,
  createTourPacket,
  updateTourPacket,
  deleteTourPacket,
  getAllTourPacket,
  getOneTourPacket,
  uploadImages,
  updateImages,
};
