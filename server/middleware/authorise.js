import jwt from "jsonwebtoken"

const authorise = async (req, res, next) => {
    try {
        const { authorization } = req.headers
        const token = authorization.split(' ')[1]
        if (!token) {
            return res.status(400)({
                success: false,
                message: 'token not found'
            })
        }
        const response = jwt.verify(token, process.env.JWT_SECRET)
        if (!response) {
            return res.status(400)({
                success: false,
                message: 'Invalid token'
            })
        }
        const { _id, name } = response
        const id = await User.findOne({ _id }).select('_id')
        if (!id) {
            return res.status(400.).json({
                success: false,
                message: 'user not found'
            })
        }
        req.user = {
            userid: id,
            name: name
        }
        next()
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Route is not authorised'
        })
    }
}

export default authorise