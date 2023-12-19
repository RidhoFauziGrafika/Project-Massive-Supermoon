const express = require("express");
const router = express.Router();
const multer = require("../config/multer");
const {
  createLodging,
  updateLodging,
  deleteLodging,
  getAllLodgings,
  getOneLodging,
  uploadLodgingImages,
  updateLodgingImages,
  getAllFacilities,
  addLodgingFacility,
  updateLodgingFacility,
} = require("../controllers/lodging.controller");

// Middleware to handle image upload using Multer
const uploadLodgingImagesMiddleware = multer.array("images", 4);

// Routes
router.post("/", createLodging);
router.put("/:id", updateLodging);
router.delete("/:id", deleteLodging);
router.get("/", getAllLodgings);
router.get("/:id", getOneLodging);
router.get("/slug/:slug", getOneLodging);

router.post("/images:id", uploadLodgingImagesMiddleware, uploadLodgingImages);
router.put("/images/:id", uploadLodgingImagesMiddleware, updateLodgingImages);

router.get("/facilities", getAllFacilities);
router.post("/:id/facilities", addLodgingFacility);
router.put("/:id/facilities", updateLodgingFacility);

module.exports = router;
