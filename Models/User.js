/**
 * =====================
 *  USER MODELS DECLARATION BELOW
 * ====================
 */
const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    nidNo: {
        type: String,
    },
    phoneNumber: {
        type: String,
        required: true
    },
    userRole: {
        type: Number,
        required: true
    }
}, {timestamps: true})
module.exports = mongoose.model('User', UserSchema)
