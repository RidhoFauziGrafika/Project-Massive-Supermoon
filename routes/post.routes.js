const Router = require("express").Router();
const upload = require("../config/multer");
const {
  createOne,
  getAll,
  getOne,
  update,
  deleteOne,
} = require("../controllers/post.controller");

Router.post("/", [upload.single("image"), createOne]);
Router.get("/", getAll);
Router.get("/:id", getOne);
Router.put("/:id", [upload.single("image"), update]);
Router.delete("/:id", deleteOne);

module.exports = Router;
