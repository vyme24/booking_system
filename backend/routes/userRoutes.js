const express = require("express");
const UserController = require("../controllers/UserController");
const { verifyToken, generateToken } = require("../services/jwt");
const passport = require("../config/passport");
const User = require("../models/User");


//route group

const router = express.Router();

router.get("/get", verifyToken, UserController.getUser)


module.exports= userRoutes = router