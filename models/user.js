 const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "please tell us your name"]
    },
    email: {
        type: String,
        require: [true, "please provide your email"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "please provide a valid email"]
    },
    photo:String,
    password: {
        type: String,
        require: [true, "please provide a password"],
        minlength: 8,
    },
    passwordConfirm: {
        type: String,
        require: [true, "please confirm your password"],
        validate: {
            validator: function (el) {
                return el === this.password;
            },
            message:"password are not same"
        }
    }
});

userSchema.pre("save", function (next) {
    if (!this.isModified('password')) return next();
    this.password = bcrypt.hash(this.password, 12);
    this.passwordC
    

});
const User = mongoose.model("User", userSchema);
module.exports = User;