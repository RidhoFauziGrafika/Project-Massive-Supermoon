const Router = require("express").Router();

app.get("/"); // get data before creating post
app.post("/"); // save data
app.get("/:slug"); // get post's slug for getting infos
app.put("/:slug"); // for updating post information
app.delete("/:slug"); // for soft delete post

// For handling user post image
app.get("/image"); // get information about image
app.post("/image"); // for uploading new image
app.put("/image"); // replace image
app.delete("/image"); // for deleting image

module.exports = Router;
