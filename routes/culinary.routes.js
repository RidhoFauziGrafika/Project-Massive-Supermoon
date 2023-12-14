const Router = require("express").Router();

app.get("/"); // get data before creating culinary
app.post("/"); // save data
app.get("/:slug"); // get culinary's slug for getting infos
app.put("/:slug"); // for updating culinary information
app.delete("/:slug"); // for soft delete culinary

// For handling user culinary image
app.get("/image"); // get information about image
app.post("/image"); // for uploading new image
app.put("/image"); // replace image
app.delete("/image"); // for deleting image

module.exports = Router;
