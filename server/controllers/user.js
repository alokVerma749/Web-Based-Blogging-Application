import Blog from '../models/Blog.js'

export const getMyBlogs = async (req, res) => {
    try {
        const user_id = req.user.userid._id
        if (!user_id) {
            return res.status(400)({
                success: false,
                message: 'user id not found'
            })
        }
        const blogs = await Blog.find({ user_id })
        if (!blogs) {
            return res.status(400)({
                success: false,
                message: 'no blogs found'
            })
        }
        res.status(200).json({
            success: true,
            message: 'blogs fetched successfully',
            blogs
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
export const deleteMyBlog = async (req, res) => {
    try {
        const blogid = req.params
        if (!blogid) {
            return res.status(400)({
                success: false,
                message: 'blogid not found'
            })
        }
        const blog = await Blog.findByIdAndDelete(blogid)
        if (!blog) {
            return res.status(400)({
                success: false,
                message: 'blog not found'
            })
        }
        res.status(200).json({
            success: true,
            message: 'blog deleted successfully',
            blog
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
export const getMyBlog = async (req, res) => {
    try {
        const blogid = req.params
        if (!blogid) {
            return res.status(400)({
                success: false,
                message: 'blogid not found'
            })
        }
        const blog = await Blog.findById(blogid)
        if (!blog) {
            return res.status(400)({
                success: false,
                message: 'blog not found'
            })
        }
        res.status(200).json({
            success: true,
            message: 'blog fetched successfully',
            blog
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
export const getUserInfo = async (req, res) => {
    try {
        const user_id = req.user.userid._id
        const username = req.user.name
        res.status(200).json({
            success: true,
            message: 'user data fetched successfullly',
            username,
            user_id
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}