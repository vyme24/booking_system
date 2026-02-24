const express = require("express");
const AuthController = require("../controllers/AuthController");
const { verifyToken, generateToken } = require("../services/jwt");
const passport = require("../config/passport");
const User = require("../models/User");


//route group

const router = express.Router();

router.post("/register", AuthController.register)
router.post("/login", AuthController.login)
router.post("/forgot-password", AuthController.forgotPassword)
router.post("/reset-password", verifyToken, AuthController.resetPassword)
router.post("/verify", AuthController.verify)


router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login/failed' }),
  async (req, res) => {
    console.log('Google authentication successful');
  //  console.log('User profile:', req);
    const user = await User.findOne({googleId:req.user.id});
    // Generate JWT and send to React client
   const token = generateToken(user);
  
    res.redirect(`${process.env.FRONTEND_URL}/auth/login/success?token=${token}`);
  }
);


module.exports= authRoutes = router