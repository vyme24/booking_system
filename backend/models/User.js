const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        default: null
    },
      last_name: {
        type: String,
        default: null
    }, 
     username: {
        type: String,
        default: null
    },
      email: {
        type: String,
       unique: true, 
       default:null, 
    },
      password: {
        type: String,
        required:true
    },
      avatar: {
        type: String,
        default: null
    },
     mobile: {
        type: String,
        unique: true,
        default:null
    },
      email_verify_at: {
        type: Date,
        default :null
    },
      mobile_verify_at: {
        type: Date,
        default :null
    },
     status: {
        type: Boolean,
        default: true
    },
      googleId: {
        type: String,
        default: null
    },
     authType: {
        type: String,
        enum: ['local', 'google', "facebook"],
        default: 'local'
    }

}, {timestamps: true})

module.exports = UserModel = mongoose.model("User", UserSchema)