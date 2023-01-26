import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'some credentials not found'
            })
        }
        const alreadyExist = await User.findOne({ email })
        if (alreadyExist) {
            return res.status(400).json({
                success: false,
                message: 'User already exists`'
            })
        }
        const user = await User.create({
            name, email, password
        })
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'signup failed'
            })
        }
        res.status(200).json({
            success: true,
            message: 'signup success'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }

}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'some credentials not found'
            })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'User not found'
            })
        }
        const userName = user.name
        const comparePassword = await user.comparePassword(password)
        if (!comparePassword) {
            return res.status(400).json({
                success: false,
                message: 'Invalid credentials'
            })
        }
        const token = user.generateToken()
        if (!token) {
            return res.status(400).json({
                success: false,
                message: 'Token generation failed'
            })
        }
        res.cookie('token', token, {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true
        })
        res.status(200).json({
            success: true,
            message: 'signin success'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
export const logout = async (req, res) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        success: true,
        message: "Logged Out"
    })
}
export const authStatus = async (req, res) => {
    // check if the user has a "token" cookie
    const token = req.cookies.token;
    if (token) {
        const isAuthenticated = checkTokenValidity(token);
        if (isAuthenticated) {
            res.json({ status: true });
        } else {
            res.json({ status: false });
        }
    } else {
        res.json({ status: false });
    }
}

async function checkTokenValidity(token) {
    // this function would typically check the token against a database or JWT library
    const decoded = await jwt.verify(token, process.env.JWT_SECRET)
    if (decoded) {
        return true
    }
    return false;
}