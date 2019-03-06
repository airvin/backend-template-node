import mongoose from 'mongoose'

let UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
}, { timestamps: true })

mongoose.model('User', UserSchema);