const router = require("express").Router();
const verifyToken = require("../middleware/verifyToken");
const {
  getGenders,
  registerUser,
  loginUser,
  updateProfile,
  changePassword,
  deleteAccount,
  getUserById,
} = require("../controllers/authController");

router.get("/register", getGenders);
router.post("/register", registerUser);
router.post("/login", [verifyToken, loginUser]);
router.get("/profile", [verifyToken, getUserById]);
router.put("/profile", [verifyToken, updateProfile]);
router.put("/password", [verifyToken, changePassword]);
router.delete("/", [verifyToken, deleteAccount]);

module.exports = router;
