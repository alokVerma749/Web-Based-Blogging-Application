import Blog from '../models/Blog.js'

export const getBlogs = async (req, res) => {
    try {
        console.log(req)
        const blogs = await Blog.find({})
        if (!blogs) {
            return res.status(404)({
                success: false,
                message: 'blogs not found'
            })
        }
        res.status(200).json({
            success: true,
            message: 'blogs fetched successfullyy',
            blogs
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'blogs fetching failed'
        })
    }
}