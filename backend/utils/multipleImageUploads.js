const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname, "../public"));
  },
  filename: function (req, file, callback) {
    const uniqueFileName =
      Date.now() + "-" + uuidv4() + path.extname(file.originalname);
    callback(null, uniqueFileName);

    // Save the image_path for each iteration
    if (!req.image_paths) {
      req.image_paths = [];
    }
    req.image_paths.push(uniqueFileName);
  },
});

const imageFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
    return callback(new Error("Only image files are allowed!"), false);
  }
  callback(null, true);
};

// Config file uploads
const upload = multer({
  storage: storage,
  fileFilter: imageFilter,
  limits: { fileSize: 1024 * 1024 },
});

async function handleImageUpload(fieldName, maxCount) {
  return upload.array(fieldName, maxCount);
}

module.exports = { upload, handleImageUpload };
