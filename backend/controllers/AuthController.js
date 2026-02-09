const bcryptjs= require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/User");


const register = async(req,res) => {
   try {
    const {first_name, last_name, email, password }= req.body;
    if(!first_name && !last_name && !email && !password) {
        throw Error("pls fill required input")
    }

    const Exist = await User.findOne({email});

    if(Exist){
      return res.status(201).json({status: true, message: "User Exist"})
    }

    const hashPassword =  await bcryptjs.hash(password,16);

    await User.create({
        first_name,
        last_name,
        email,
        password: hashPassword
    })
    
     return res.status(200).json({status: true, message: "Register Successfully"})
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
    const token = jwt.sign(Exist.toObject(), process.env.JWT_SECRET)

    const User =await bcryptjs.compare(password,Exist.password)
       if(!User){
      return res.status(404).json({status: true, message: "User Not Exist", data : {token}})
    }


   
     return res.status(200).json({status: true, message: "Login Successfully"})
   } catch (error) {
     return res.status(500).json({status: false, message: error.message})
   }
}


module.exports = {
    register,
    login
}