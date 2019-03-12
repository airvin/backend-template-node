import mongoose from 'mongoose'

let UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true }
}, { timestamps: true })

export default mongoose.model('User', UserSchema)
