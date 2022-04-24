const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        maxlength: [40, "Name is too long"],
    }, 
    email: {
        type: String,
        required: [true, "Please enter your email"],
        maxlength: [50, "Email is too long"],
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        maxlength: [255, "Password is too long"],
    }
});

// module.exports = mongoose.models.User || mongoose.model("User", UserSchema);

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;