const Router = require("express").Router();
const saveMultipleImage = require('../utils/multipleImageUploads')
const {newTour, saveTour, indexTour, detailTour, editTour, deleteTour} = require('../controllers/tourController')

Router.get("/new", newTour);
Router.post("/save", saveTour);
Router.get("/index", indexTour);
Router.get("/:slug", detailTour);
Router.put("/:slug", editTour);
Router.delete("/:slug", deleteTour);

module.exports = Router