import dotenv from 'dotenv'
dotenv.config()
import express from 'express'

import auth from './routes/auth.js'
import blog from './routes/blog.js'
import user from './routes/user.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, _res, next) => {
    console.log(req.method, req.path)
    next()
})
app.use(cookieParser())
app.use(
    cors({
        origin: "http://localhost:4000/",
        credentials: true,
    })
);
app.use('/', blog)
app.use('/auth', auth)
app.use('/user', user)

export default app