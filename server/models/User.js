import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const { Schema } = mongoose
import { AuthRoles } from '../utils/AuthRoles.js'

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 30
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxLength: 40
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: Object.values(AuthRoles),
        default: AuthRoles.USER
    },
})


userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next()
    }
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods = {
    comparePassword: async function (enteredPassword) {
        return await bcrypt.compare(enteredPassword, this.password)
    },
    generateToken: function () {
        return jwt.sign(
            {
                _id: this._id,
                name: this.name
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRY
            }
        )
    },
}

export default mongoose.model('User', userSchema)