const bcryptjs= require("bcryptjs")

const User = require("../models/User");
const { generateToken } = require("../services/jwt");
const { sendResetPasswordEmail, resetPasswordEmail } = require("../services/mail");
const { generateOTP } = require("../utils/otpHandler");


const register = async(req,res) => {
   try {
    const {first_name, last_name, email, password, mobile}= req.body;
    if(!first_name || !last_name || !password) {
        throw Error("pls fill required input")
    }
    const type = email ? "email" : "mobile";
     
    if(type === "email" && !email){ 
           throw Error("Email is Required")
   
      }  
      if(type === "mobile" && !mobile){ 
           throw Error("Mobile is Required")
   
      }  

 
   
    if(mobile && mobile.length !== 10){
      throw Error("Mobile number must be 10 digits")
    }
    const Exist = await User.findOne({"$or":[{email}, {mobile}]});

   
    if(Exist && type == "mobile" && Exist.mobile_verify_at == null){
          const otp = await generateOTP(type,Exist._id);
          return res.status(200).json({status: true, message: `OTP sent on ${type} Successfully`, data : otp})
    }

    if(Exist && type == "email" && Exist.email_verify_at == null){
        const otp = await generateOTP(type,Exist._id);
          return res.status(200).json({status: true, message: `OTP sent on ${type} Successfully`, data : otp})
    }

    if(Exist){
      return res.status(404).json({status: true, message: "User Exist"})
    }

    const hashPassword =  await bcryptjs.hash(password,16);

    await User.create({
        first_name,
        last_name,
        email,
        mobile,
        password: hashPassword
    })
     const otp = await generateOTP(type,Exist._id);
          return res.status(200).json({status: true, message: `OTP sent on ${type} Successfully`, data : otp})
   } catch (error) {
     return res.status(500).json({status: false, message: error.message})
   }
}


const login = async(req,res) => {
   try {
    const {email, password }= req.body;
    if(!email && !password) {
        throw Error("pls fill required input")
    }

    const Exist = await User.findOne({email});

    if(!Exist){
      return res.status(404).json({status: true, message: "User Not Exist"})
    }
    const token = generateToken(Exist)

    const user =await bcryptjs.compare(password,Exist.password)
       if(!user){
      return res.status(404).json({status: true, message: "Invalid Credentials", data : {token}})
    }


   
     return res.status(200).json({status: true, message: "Login Successfully", data : {token}})
   } catch (error) {
     return res.status(500).json({status: false, message: error.message})
   }
}

const forgotPassword = async(req,res) => {
  try {
    const {email} = req.body;
    if(!email) {
        throw Error("pls fill required input")
    }

    const Exist = await User.findOne({email});

    if(Exist){
         const resetToken = generateToken(Exist);
         const resetLink = `${process.env.FRONTEND_URL}/auth/reset-password?token=${resetToken}`;
        await sendResetPasswordEmail(email, resetLink);
    }
     return res.status(200).json({status: true, message: "Password Reset Link Sent To Your Email"})
   } catch (error) {
     return res.status(500).json({status: false, message: error.message})
   }
}

const resetPassword = async(req,res) => {
  try {
    const {password, confirm_password} = req.body;
    if(!password || !confirm_password) {
        throw Error("pls fill required input")
    }
    if(password !== confirm_password){
      throw Error("Password and Confirm Password must be same")
    }
   console.log(req.user)
    const Exist = await User.findById(req.user._id);

    if(!Exist){
      return res.status(404).json({status: true, message: "User Not Exist"})
    }

     const hashPassword =  await bcryptjs.hash(password,16);

     await User.findOneAndUpdate({email:Exist.email}, {
      password: hashPassword
     })
     await resetPasswordEmail(Exist.email, Exist)
     return res.status(200).json({status: true, message: "Password Reset Successfully"})
   } catch (error) {
     return res.status(500).json({status: false, message: error.message})
   }
}


module.exports = {
    register,
    login,
    forgotPassword,
    resetPassword
}