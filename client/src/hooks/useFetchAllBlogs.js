import { AllBlogsContext } from "../contexts/AllBlogsContext.js"
import { useContext } from "react"

export const useFetchAllBlogs = () => {
    const { setBlogs } = useContext(AllBlogsContext)
    try {
        const fetchAllBlogs = async () => {
            const response = await fetch('/', {
                headers: { 'Content-Type': 'appication/json' }
            })
            const json = await response.json()
            console.log(json)
            if (response.ok) {
                const data = response.blogs
                setBlogs(data)
                console.log(data)
            }
        }
        return ({ fetchAllBlogs })
    } catch (error) {
        console.log(error.message)
    }
}