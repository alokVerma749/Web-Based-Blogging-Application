import express from 'express'
import authorise from '../middleware/authorise.js'
const router = express.Router()

import { createBlog, getMyBlogs, deleteMyBlog, getMyBlog, getUserInfo } from '../controllers/user.js'
router.use(authorise)
router.post('/', createBlog)
router.get('/', getMyBlogs)
router.delete('/:todoid', deleteMyBlog)
router.get('/:todoid', getMyBlog)
router.get('/userinfo', getUserInfo)
export default router