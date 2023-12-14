const Router = require("express").Router();

app.get("/"); // get data before creating bank
app.post("/"); // save data
app.get("/:uuid"); // get bank's uuid for getting infos
app.put("/:uuid"); // for updating bank information
app.delete("/:uuid"); // for soft delete bank


module.exports = Router;
