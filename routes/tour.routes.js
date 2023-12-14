const Router = require("express").Router();

app.get("/"); // get data before creating tour
app.post("/"); // save data
app.get("/:slug"); // get tour's slug for getting infos
app.put("/:slug"); // for updating tour information
app.delete("/:slug"); // for soft delete tour

// For handling user tour image
app.get("/image"); // get information about image
app.post("/image"); // for uploading new image
app.put("/image"); // replace image
app.delete("/image"); // for deleting image

module.exports = Router;
