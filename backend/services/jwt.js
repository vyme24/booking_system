const jwt = require("jsonwebtoken")

const generateToken = (user) => {
    return jwt.sign(user.toObject(), process.env.JWT_SECRET, {expiresIn: "10m"})
}

const verifyToken = (req,res,next) => {
    const token = req.headers.authorization;
   
    if(!token){
        return res.status(401).json({status: false, message: "Unauthorized"})
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({status: false, message: "Invalid Token"})
    }
   
}

module.exports = {
    generateToken,
    verifyToken
}