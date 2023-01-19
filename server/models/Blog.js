import mongoose from 'mongoose'
const { Schema } = mongoose

const blogSchema = new Schema({
    thumbnail: {
        type: String
    },
    title: {
        type: String,
        required: true,
        maxLength: 50,
        minLength: 10
    },
    body: {
        type: String,
        required: true
    },
    user_id: {
        type: String
    },
    createdAt: {
        type: String
    }
})
export default mongoose.model('Blog', blogSchema)