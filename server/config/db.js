import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('DB connection successfully')
    } catch (error) {
        throw new Error(error.message)
    }
}

export default connectDB