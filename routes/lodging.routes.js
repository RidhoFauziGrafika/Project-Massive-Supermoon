const Router = require("express").Router();

app.get("/"); // get data before creating lodging
app.post("/"); // save data
app.get("/:slug"); // get lodging's slug for getting infos
app.put("/:slug"); // for updating lodging information
app.delete("/:slug"); // for soft delete lodging

// For handling user lodging image
app.get("/image"); // get information about image
app.post("/image"); // for uploading new image
app.put("/image"); // replace image
app.delete("/image"); // for deleting image

module.exports = Router;
