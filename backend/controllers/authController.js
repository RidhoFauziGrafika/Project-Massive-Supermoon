const dbExecute = require("../config/db");
const validator = require("validator");
const fs = require("fs/promises");
const path = require("path");
const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require("uuid");
const validateRegister = require('../request/registerRequest')
require("dotenv").config();
const handleImageUpload = require("../utils/multipleImageUploads");

const getGenders = async (req, res) => {
  try {
    const genders = await dbExecute(
      "SELECT id, name FROM user_genders WHERE is_deleted = FALSE"
    );
    res.status(200).json({ message: "Success", data: genders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const registerUser = async (req, res) => {
  const { fullname, email, phone_number, gender_id, password, confirm_password } = req.body;
    let image = null
  try {
    // Hash the password before saving (use bcrypt or any other secure method)
    // Note: You need to include password in your registration form and hash it
    // before saving to the database. I'm assuming you have a password field.

    validateRegister(fullname, email, image, phone_number, gender_id, password)
    
    if (password ===  confirm_password) {
    return res.sendStatus(400).json({
      message: "Bad Request!",
      errors: {password: "Password tidak cocok!"},
    });
    }

    if (confirm_password ===  password) {
    return res.sendStatus(400).json({
      message: "Bad Request!",
      errors: {password: "Password tidak cocok!"},
    });
    }

    // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

    let newUser = {
      id_uuid: generateUUID(),
      fullname,
      email,
      password: hashedPassword,
      phone_number,
      gender_id,
      role_id: 1, // Default to CLIENT role
      created_at: new Date(),
      updated_at: new Date(),
    };

    if(image === null) {
        // Handle image upload
        await handleImageUpload("image", 1)(req, res);
    
        // Check if handleImageUpload encountered an error
        if (res.headersSent) {
          // Response has already been sent, do not proceed with further processing
          return;
        }
        newUser.image_path = req. req.image_paths[0]
    }

    await dbExecute("INSERT INTO users SET ?", newUser);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

// Function to generate UUID
function generateUUID() {
 uuidv4()
}

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate user credentials, check if email and password match
    // Implement your authentication logic here

    if(email === null) {
        res.sendStatus(400).json({message: 'error', errors: {email: 'Email kosong!'}})
    }
    if(password === null) {
        res.sendStatus(400).json({message: 'error', errors: {password: 'Password kosong!'}})
    }

    checkEmail = await dbExecute('SELECT email FROM users WHERE email = ?', [email])

   if (checkEmail.length === 0) {
  res.status(400).json({ message: 'error', errors: { auth: 'Data tidak valid!' } });
    }


    // If authentication is successful, create and send JWT token
    const user = await dbExecute('SELECT id_uuid,email FROM users WHERE email = ?', [email])
    const token = createJWTToken(user);

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

// Function to create JWT token
function createJWTToken(user) {
  const payload = {
    user: {
      id_uuid: user.id_uuid,
      email: user.email,
      // Add other user data as needed
    },
  };

  return jwt.sign(payload, process.env.SECRET, { expiresIn: 3600 });
}

const updateProfile = async (req, res) => {
  const userId = req.user.id_uuid; // Extract user id_uuid from the token
  const { fullname, phone_number, image_path, gender_id } = req.body;

  try {
    // Retrieve the user's current image path
    const [currentUser] = await dbExecute(
      "SELECT image_path FROM users WHERE id_uuid = ? AND is_deleted = FALSE",
      [userId]
    );

    // Delete the old image if it exists
    if (currentUser && currentUser.image_path) {
      const oldImagePath = path.join(
        __dirname,
        "../public",
        currentUser.image_path
      );
      await fs.unlink(oldImagePath);
    }

    // Update the user profile
    await dbExecute(
      "UPDATE users SET fullname=?, phone_number=?, image_path=?, gender_id=?, updated_at=? WHERE id_uuid=?",
      [fullname, phone_number, image_path, gender_id, new Date(), userId]
    );

    res.status(200).json({ message: "User profile updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};


const changePassword = async (req, res) => {
  const userId = req.user.id_uuid; // Extract user id_uuid from the token
  const { currentPassword, newPassword } = req.body;

  try {
    // Retrieve the current hashed password from the database
    const [user] = await dbExecute(
      "SELECT id_uuid, password FROM users WHERE id_uuid = ? AND is_deleted = FALSE",
      [userId]
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the current password provided with the hashed password in the database
    const passwordMatch = await bcrypt.compare(currentPassword, user.password);

    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid current password" });
    }

    // Validate the new password
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,128}$/.test(
      newPassword
    );

    if (!isPasswordValid) {
      return res
        .status(400)
        .json({
          message: "error",
          errors: { password: "Password tidak valid" },
        });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password in the database
    await dbExecute(
      "UPDATE users SET password = ?, updated_at = ? WHERE id_uuid = ?",
      [hashedPassword, new Date(), userId]
    );

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};


const deleteAccount = async (req, res) => {
  const userId = req.user.id_uuid; // Extract user id_uuid from the token

  try {
    await dbExecute("UPDATE users SET is_deleted=true WHERE id_uuid=?", [userId]);

    res.status(200).json({ message: "User account deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const getUserById = async (req, res) => {
  const userId = req.user.id_uuid; // Extract user id_uuid from the token

  try {
    const user = await dbExecute("SELECT * FROM users WHERE id_uuid=?", [userId]);

    res.status(200).json({ message: "Success", data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};


module.exports = {
  getGenders,
  registerUser,
  loginUser,
  updateProfile,
  changePassword,
  deleteAccount,
  getUserById
};