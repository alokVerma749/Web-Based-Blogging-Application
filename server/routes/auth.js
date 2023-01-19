import express from 'express'
const router = express.Router()

import { login, signup } from '../controllers/auth.js'

router.post('/', signup)
router.post('/login', login)

export default router