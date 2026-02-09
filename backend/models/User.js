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
        require: true
    },
      password: {
        type: String,
        require: true
    },
      avatar: {
        type: String,
        default: null
    },
      mobile: {
        type: String,
        default: null
    },
      email_verify_at: {
        type: Date,
        default :null
    },

}, {timestamps: true})

module.exports = UserModel = mongoose.model("User", UserSchema)