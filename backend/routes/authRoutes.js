const express = require("express");
const AuthController = require("../controllers/AuthController");
const { verifyToken } = require("../services/jwt");


//route group

const router = express.Router();

router.post("/register", AuthController.register)
router.post("/login", AuthController.login)
router.post("/forgot-password", AuthController.forgotPassword)
router.post("/reset-password", verifyToken, AuthController.resetPassword)

module.exports= authRoutes = router