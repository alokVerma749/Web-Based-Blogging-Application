import connectDB from './config/db.js'
connectDB()
import app from './App.js'

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})