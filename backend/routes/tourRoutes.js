const Router = require("express").Router();
const {newTour, saveTour, indexTour, detailTour, editTour, deleteTour} = require('../controllers/tourController')

Router.get("/new", newTour);
Router.post("/save", saveTour);
Router.get("/index", indexTour);
Router.get("/:id", detailTour);
Router.put("/:id", editTour);
Router.delete("/:id", deleteTour);

module.exports = Router