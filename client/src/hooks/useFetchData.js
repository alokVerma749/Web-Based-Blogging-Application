import { useState } from "react"

export const useFetchData = () => {
    const { data, setData } = useState({})
    const fetchData = async () => {
        const response = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        })
        const json = await response.json()
        if (response.ok) {
            const blogs = json.blogs
            setData(blogs)
        }
    }
    return ({ fetchData })
}