const Router = require("express").Router();
const {
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
  getOneTourPacketBySlug,
} = require("../controllers/tourPacket.controller");
const validateTourPacket = require("../validation/validateTourPacket");
const validateTourPacketUpdate = require("../validation/validateTourPacketUpdate");
const upload = require("../config/multer");

Router.get("/create", getCreateTourPacket); // get data before creating tour
Router.post("/create", [validateTourPacket, createTourPacket]); // save data
Router.get("/", getAllTourPacket); //get retrive all data
// Router.put("/update/:id", [validateTourPacket, updateTourPacket]); // for updating tour information get slug and id from json
Router.put("/update/:id", [validateTourPacketUpdate, updateTourPacket]); // for updating tour information get slug and id from json
Router.get("/slug/:slug", getOneTourPacketBySlug); //MUST PROVIDE JSON ID
Router.delete("/", deleteTourPacket); // for soft delete tour get id from json

Router.get("/facilities", getAllFacilities); // get all facilities for adding or updating wisata, penginapan, kuliner
// Wisata
Router.get("/:id", getOneTourPacket); //MUST PROVIDE JSON ID
Router.post("/tour-facilities", addTourFacility);
Router.put("/tour-facilities", updateTourFacility);

// Penginapan
Router.post("/inn-facilities", addLodgingFacility);
Router.put("/inn-facilities", updateLodgingFacilities);

// kuliner
Router.post("/culinary-facilities", addCulinaryFacility);
Router.put("/culinary-facilities", updateCulinaryFacilities);

Router.post("/image/:id", [upload.array("images", 4), uploadImages]);

Router.put("/image/:id", [upload.array("images", 4), updateImages]);

module.exports = Router;
