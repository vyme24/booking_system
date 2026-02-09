const express = require("express");
const AuthController = require("../controllers/AuthController")


//route group

const router = express.Router();

router.post("/register", AuthController.register)
router.post("/login", AuthController.login)

module.exports= authRoutes = router