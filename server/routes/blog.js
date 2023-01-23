import express from 'express'
const router = express.Router()

import { getBlogs } from '../controllers/blog.js'
router.get('/getallblogs', getBlogs)

export default router