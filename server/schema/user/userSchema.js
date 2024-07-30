const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    companyName: { type: String, required: true },
    doorNo: {type:String},
    street: {type:String},
    address: {type:String},
    dist: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    pincode: { type: Number, required: true },
    gstin: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
});

module.exports = new mongoose.model("user",userSchema)