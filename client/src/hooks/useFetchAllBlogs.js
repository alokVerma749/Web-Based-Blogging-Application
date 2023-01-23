import { AllBlogsContext } from "../contexts/AllBlogsContext.js"
import { useContext } from "react"

export const useFetchAllBlogs = () => {
    const { dispatch } = useContext(AllBlogsContext)
    try {
        dispatch({
            payload: {
                blogs: [],
                fetching: true
            }
        })
        const fetchAllBlogs = async () => {
            const response = await fetch('/getallblogs')
            if (response.ok) {
                const json = await response.json()
                const data = await json.blogs
                dispatch({
                    type: 'SET_BLOGS',
                    payload: {
                        blogs: data,
                        fetching: false
                    }
                })
            }
        }
        return ({ fetchAllBlogs })
    } catch (error) {
        console.log(error.message)
    }
}