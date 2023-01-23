import { AllBlogsContext } from "../contexts/AllBlogsContext.js"
import { useContext } from "react"

export const useFetchAllBlogs = () => {
    const { setBlogs } = useContext(AllBlogsContext)
    try {
        const fetchAllBlogs = async () => {
            const response = await fetch('/', {
                headers: { 'Content-Type': 'appication/json' }
            })
            if (response.ok) {
                const json = await response.json()
                const data = await json.blogs
                setBlogs(data)
            }
        }
        return ({ fetchAllBlogs })
    } catch (error) {
        console.log(error.message)
    }
}