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
} = require("../controllers/tourPacket.controller");
const validateTourPacket = require("../validation/validateTourPacket");
const upload = require("../config/multer");

Router.get("/create", getCreateTourPacket); // get data before creating tour
Router.post("/create", [validateTourPacket, createTourPacket]); // save data
Router.put("/", [validateTourPacket, updateTourPacket]); // for updating tour information get slug and id from json
Router.get("/", getAllTourPacket); //get retrive all data
Router.get("/", getOneTourPacket); //MUST PROVIDE JSON ID
Router.delete("/", deleteTourPacket); // for soft delete tour get id from json

Router.get("/facilities", getAllFacilities); // get all facilities for adding or updating wisata, penginapan, kuliner
// Wisata
Router.post("/tour-facilities", addTourFacility);
Router.put("/tour-facilities", updateTourFacility);

// Penginapan
Router.post("/inn-facilities", addLodgingFacility);
Router.put("/inn-facilities", updateLodgingFacilities);

// kuliner
Router.post("/culinary-facilities", addCulinaryFacility);
Router.put("/culinary-facilities", updateCulinaryFacilities);

Router.post("/image", [upload.array("images", 5), uploadImages]); // for uploading new image get id from json
Router.put("/image", updateImages); // replace image get id from json

module.exports = Router;
