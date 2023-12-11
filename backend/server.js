// IMPORT LIB OR MODULES
require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const db = require("./config/db");
const cors = require("cors");
const path = require('path')
// const userRoutes = require('./routes/userRoutes')
const tourRoutes = require('./routes/tourRoutes')

// CONSTANT CONFIG
const PORT = process.env.PORT || 5050;
// CORS WHITELIST
const whitelist = ["http://localhost:5173", "http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// PRE_APPLIED MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.use('/storage', express.static(path.join(__dirname, 'public')))

// app.use("/api/users", userRoutes);
app.use('/api/tours', tourRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on PORT http://localhost:${PORT}`);
});
