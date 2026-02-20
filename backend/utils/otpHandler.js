const sendMessage = require("../services/twilio");
const sendMail = require("../services/bravo");

const OTPModel = require("../models/Otp");
const UserModel = require("../models/User");

const generateOTP = async (type,userId) => {
    console.log(type, userId);
    const otp = Math.floor(100000 + Math.random() * 900000);
    const User = await UserModel.findById(userId);
   const Exist = await OTPModel.findOne({userId});
   if(Exist){
    await OTPModel.findByIdAndDelete(Exist._id)
   }
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes
    await OTPModel.create({userId, otp, expiresAt});

    const message = `Your Verifcation OTP is : ${otp}`;
     if(type== "mobile"){
        await sendMessage(User.mobile, message)
     }else{
        await sendMail(User.email," Verifcation Code", message)
     }

     return {type, expiresAt, userId} 
}

const verifyOTP = async (userId, otp) => {
    const record = await OTPModel.findOne({userId, otp});
    if (!record) {
        throw new Error("Invalid OTP");
    }
    if (record.expiresAt < new Date()) {
        await OTPModel.findByIdAndDelete(record._id);
        throw new Error("OTP expired");
    }
    await OTPModel.findByIdAndDelete(record._id);
    return true;
}

module.exports = {generateOTP, verifyOTP}