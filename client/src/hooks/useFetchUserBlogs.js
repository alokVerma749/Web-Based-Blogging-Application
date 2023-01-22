import { UserContext } from "../contexts/UserBlogsContext.js"
import { useContext } from "react"

export const useFetchUserBlogs = () => {
    const { setUserBlogs, setIsLoading } = useContext(UserContext)
    const fetchBlogs = async () => {
        setIsLoading(true)
        const response = await fetch('/user/', {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('user')}` }
        })
        const json = await response.json()
        if (response.ok) {
            const data = json.blogs
            setUserBlogs(data)
            setIsLoading(false)
        }
    }
    return ({ fetchBlogs })
}