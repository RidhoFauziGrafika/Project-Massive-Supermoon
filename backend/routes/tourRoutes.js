const Router = require("express").Router();
const saveMultipleImage = require('../utils/multipleImageUploads')
const {newTour, saveTour, indexTour, detailTour, editTour, deleteTour} = require('../controllers/tourController')

Router.get("/", newTour);
Router.post("/", saveTour);
Router.get("/", indexTour);
Router.get("/:slug", detailTour);
Router.put("/:slug", editTour);
Router.delete("/:slug", deleteTour);

module.exports = Router