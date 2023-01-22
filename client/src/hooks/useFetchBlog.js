import { AllBlogsContext } from "../contexts/AllBlogsContext.js"
import { useContext } from "react"

export const useFetchData = () => {
    const { setBlogs, setIsLoading } = useContext(AllBlogsContext)
    const fetchBlogs = async () => {
        setIsLoading(true)
        const response = await fetch('/user/', {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('user')}` }
        })
        const json = await response.json()
        if (response.ok) {
            const data = json.blogs
            setBlogs(data)
            setIsLoading(false)
        }
    }
    return ({ fetchBlogs })
}