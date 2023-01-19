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
        res.status(200).json({
            success: true,
            message: 'signin success',
            token
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}