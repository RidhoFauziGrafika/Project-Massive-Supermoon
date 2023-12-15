const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const path = require("path");
const fs = require("fs/promises");
const jwt = require("jsonwebtoken");
const { query } = require("../config/database");
const toDatetime = require("../utils/datetime");
const { SECRET, DB_USER } = require("../config/configs");

// const createToken = async (user) => {
//   const expiresIn = "15m";

//   const token = await jwt.sign({ user }, SECRET, {
//     expiresIn: "15m",
//     algorithm: "HS256",
//   });
//   return token;
// };

const ROLES = {
  CLIENT: "8912",
  ADMIN: "6501",
};

const ADMIN = 1;
const CLIENT = 2;

function getRole(role_name) {
  return role_name === ADMIN ? ROLES.ADMIN : ROLES.CLIENT;
}

const getRegister = asyncHandler(async (req, res) => {
  try {
    const genders = await query("SELECT id, name FROM user_genders");
    res.json({ status: "ok", genders: genders });
  } catch (error) {
    res
      .sendStatus(500)
      .json({ message: "Gagal menerima data gender!", status: "failed" });
    throw new Error("error occured when retreiving user genders!");
  }
});

const register = asyncHandler(async (req, res) => {
  console.log(req);

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    await query(
      `INSERT INTO users (id_uuid, fullname, email, phone_number, password, gender_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        uuidv4(),
        req.body.fullname,
        req.body.email,
        req.body.phone,
        hashedPassword,
        req.body.gender.toString(),
        toDatetime(Date.now()),
        toDatetime(Date.now()),
      ]
    );

    return res.status(200).json({
      success: true,
      message: "Registrasi berhasil!",
    });
  } catch (error) {
    res
      .status("500")
      .json({ succes: false, message: "Eror terjadi saat registrasi!" });
    console.log(error);
    throw new Error("Error saat registrasi!");
  }
});

const login = asyncHandler(async (req, res) => {
  try {
    const user = await query(
      `SELECT u.id_uuid, u.fullname, image_path, u.email, r.name AS role
FROM users AS u
JOIN user_roles AS r ON u.role_id = r.id
WHERE u.email = ?;
`,
      [req.body.email]
    );

    console.log(user);

    const token = await jwt.sign(
      {
        fullname: user.fullname,
        email: user.email,
        role: user.role,
        id_uuid: user.id_uuid,
      },
      SECRET,
      {
        expiresIn: "15m",
        algorithm: "HS256",
      }
    );

    console.log("role", getRole(user.role));
    console.log(token);
    res.json({
      succes: true,
      message: "Login berhasil!",
      user: user,
      token: token,
      access: getRole(user.role),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error!" });
    throw new Error("Error saat login!");
  }
});

const getUser = asyncHandler(async (req, res) => {});
const updateUser = asyncHandler(async (req, res) => {});

const deleteUser = asyncHandler(async (req, res) => {});

const getImage = asyncHandler(async (req, res) => {});

const uploadImage = asyncHandler(async (req, res) => {});

const replaceImage = asyncHandler(async (req, res) => {});

const deleteImage = asyncHandler(async (req, res) => {});

module.exports = {
  getRegister,
  register,
  getUser,
  updateUser,
  deleteUser,
  getImage,
  uploadImage,
  replaceImage,
  deleteImage,
  login,
};
