const Router = require("express").Router();
const {
  getAllTourPackets,
  getOnePacketTour,
  newTourPacket,
  editPacketTour,
  deleteTourPacket,
  saveTourPacket,
} = require("../controllers/tourPacketController");

Router.get("/new", newTourPacket);
Router.post("/save", saveTourPacket);
Router.get("/index", getAllTourPackets);
Router.get("/:id", getOnePacketTour);
Router.put("/:id", editPacketTour);
Router.delete("/:id", deleteTourPacket);

module.exports = Router
