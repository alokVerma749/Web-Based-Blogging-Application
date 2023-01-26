import express from 'express'
const router = express.Router()

import { login, signup, logout, authStatus } from '../controllers/auth.js'

router.post('/', signup)
router.post('/login', login)
router.get('/logout', logout)
router.get('/auth-status', authStatus)

export default router