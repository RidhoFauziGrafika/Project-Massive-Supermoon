require("dotenv").config();
const express = require("express");
const { NODE_PORT } = require("./config/configs");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const errorHandler = require("./middleware/errorHandler.middleware");
const app = express();
const morgan = require("morgan");
const tourPacketRoutes = require("./routes/tourPacket.routes");
const path = require("path");
const paymentRoutes = require("./routes/payment.routes");
const postRoutes = require("./routes/post.routes");
const lodgingRoutes = require("./routes/lodging.routes");
const culinaryRoutes = require("./routes/culinary.routes");
const bankRoutes = require("./routes/bank.routes");
const upload = require("./config/multer");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.use(errorHandler);
app.use("/storage", express.static(path.join(__dirname, "public")));
app.use("/api/auth", authRoutes);
app.use("/api/tour-packets", tourPacketRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/lodgings", lodgingRoutes);
app.use("/api/culinaries", culinaryRoutes);
app.use("/api/banks", bankRoutes);
app.use("/upload", upload.array("images", 4), (req, res) => {
  const imagePaths = req.files;
  console.log(imagePaths);
  res.json({
    data: imagePaths,
  });
});
app.listen(NODE_PORT, () => {
  console.log(
    `Server is running on PORT ${NODE_PORT} http://localhost:${NODE_PORT}`
  );
});
