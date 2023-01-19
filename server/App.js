import dotenv from 'dotenv'
dotenv.config()
import express from 'express'

import auth from './routes/auth.js'
import blog from './routes/blog.js'
import user from './routes/user.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, _res, next) => {
    console.log(req.method, req.path)
    next()
})

app.use('/', blog)
app.use('/auth', auth)
app.use('/user', user)

export default app