require("dotenv").config();
const express = require("express");
const { NODE_PORT } = require("./config/configs");
const cors = require("cors");
const authRoutes = require('./routes/auth.routes')
const errorHandler = require('./middleware/errorHandler.middleware')
const app = express();
const morgan = require("morgan");

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: '*'}));

app.use(errorHandler);
app.use('/api/auth', authRoutes)

app.listen(NODE_PORT, () => {
  console.log(
    `Server is running on PORT ${NODE_PORT} http://localhost:${NODE_PORT}`
  );
});
