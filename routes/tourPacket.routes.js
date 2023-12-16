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
} = require("../controllers/tourPacket.controller");
const validateTourPacket = require("../validation/validateTourPacket");

Router.get("/create", getCreateTourPacket); // get data before creating tour
Router.post("/create", [validateTourPacket, createTourPacket]); // save data
// Router.put("/:slug"); // for updating tour information
// Router.get("/");
// Router.get("/:slug"); // get tour's slug for getting infos
// Router.delete("/:slug"); // for soft delete tour

// For handling user tour image
// Router.get("/image"); // get information about image
Router.post("/image"); // for uploading new image
Router.put("/image"); // replace image
// Router.delete("/image"); // for deleting image

module.exports = Router;
