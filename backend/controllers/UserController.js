const User = require("../models/User");


const getUser = async(req,res) => {
   try {
   

    const Exist = await User.findById(req.user._id).select("-password");

    if(!Exist){
      return res.status(404).json({status: true, message: "User Not Exist"})
    }
   


   
     return res.status(200).json({status: true, message: "get User Successfully", data : Exist})
   } catch (error) {
     return res.status(500).json({status: false, message: error.message})
   }
}



module.exports = {
    getUser,
   
}