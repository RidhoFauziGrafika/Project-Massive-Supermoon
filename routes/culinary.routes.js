const express = require("express");
const multer = require("multer");
const culinaryController = require("../controllers/culinary.controller");

const router = express.Router();
const upload = multer(/* your multer setup */);

// Routes for Culinary Controller

// Create Culinary
router.post("/culinaries", culinaryController.createCulinary);

// Update Culinary
router.put("/culinaries/:id", culinaryController.updateCulinary);

// Delete Culinary
router.delete("/culinaries/:id", culinaryController.deleteCulinary);

// Get All Culinaries
router.get("/culinaries", culinaryController.getAllCulinaries);

// Get One Culinary
router.get("/culinaries/:id", culinaryController.getOneCulinary);

// Upload Culinary Images
router.post(
  "/culinaries/images",
  upload.array("images", 6),
  culinaryController.uploadCulinaryImages
);

// Update Culinary Images
router.put(
  "/culinaries/:id/images",
  upload.array("images", 6),
  culinaryController.updateImages
);

// Get All Facilities
router.get("/facilities", culinaryController.getAllFacilities);

// Add Culinary Facility
router.post("/culinaries/facilities", culinaryController.addCulinaryFacility);

// Update Culinary Facility
router.put(
  "/culinaries/:id/facilities",
  culinaryController.updateCulinaryFacility
);

// Add more routes as needed...

module.exports = router;
