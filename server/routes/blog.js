import express from 'express'
const router = express.Router()

import { getBlogs } from '../controllers/blog.js'
router.get('/', getBlogs)

export default router