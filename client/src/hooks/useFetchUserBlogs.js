import { UserBlogsContext } from "../contexts/UserBlogsContext.js"
import { useContext } from "react"

export const useFetchUserBlogs = () => {
    const { dispatch } = useContext(UserBlogsContext)
    try {
        const fetchBlogs = async () => {
            const response = await fetch('/user/', {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('user')}` }
            })
            const json = await response.json()
            if (response.ok) {
                const data = json.blogs
                dispatch({
                    type: 'SET_BLOGS',
                    payload: { userBlogs: data }
                })
            }
        }
        return ({ fetchBlogs })
    } catch (error) {
        console.log(error.message)
    }
}