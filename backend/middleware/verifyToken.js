const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const token = req.cookies.token || "";

  if (!token || token === "undefined" || token === "null") {
    return res
      .status(401)
      .json({ message: "Unauthorized: Missing or invalid token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded; // This will add the user object to the request for subsequent middleware or route handlers
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

module.exports = verifyToken;
