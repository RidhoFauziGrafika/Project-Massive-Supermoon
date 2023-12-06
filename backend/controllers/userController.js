const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const cookieParser = require("cookie-parser");
const db = require("../config/db");

// ADMIN MANAGE USERS
// @GET
async function getUsers(req, res) {
  try {
    const [results] = await db.query(
      "SELECT u.id_uuid, u.fullname, u.email, u.phone_number, u.image_path, g.name AS gender, r.name AS role FROM users AS u JOIN user_genders as g ON u.gender_id = g.id JOIN user_roles AS r ON u.role_id = r.id"
    );
    res.json({ data: { users: results } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// REGISTER AND CREATE USER DATA ENDPOINT
// @GET
async function getRegister(req, res, next) {
  try {
    const [results] = await db.query("SELECT id, name FROM user_genders");
    res.json({ data: { genders: results } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// REGISTER AND CREATE USER
// @POST
async function postRegister(req, res) {
  try {
    const { fullname, email, phone, password, password_confim, gender_id } = req.body;
    
    if(validator.isEmpty([fullname, email, phone, password, password_confim, gender_id])) {
        res.sendStatus(400).json({
          data: {
            message: "Silahkan isi kembali form yang kosong!",
            formData: {
              fullname,
              email,
              phone,
              gender_id,
            },
          },
        });
    }

    // if(fullname)

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to the database
    db.query(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      [username, hashedPassword],
      (err, result) => {
        if (err) {
          console.error("Error registering user:", err);
          res.status(500).json({ error: "Internal Server Error" });
        } else {
          console.log("User registered:", result);
          res.json({ message: "User registered successfully" });
        }
      }
    );
  } catch (error) {
    console.error("Error in registration:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// LOGIN
// @GET
async function getLogin() {}

// LOGOUT
// @POST
async function postLogout() {}

// CHANGE PROFILE DATA
// @GET
async function getUserProfile() {}

// CHANGE PROFILE DATA
// @POST
async function postChangeProfile() {}

// ADMIN DELETE USER ACCOUNT
// @DELETE
async function deleteUser() {}

module.exports = { getUsers, getRegister };
