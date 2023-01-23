import React, { useState } from 'react'
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext.js"

const Editor = () => {
    const { user } = useContext(AuthContext)
    const [data, setData] = useState({
        title: '',
        content: '',
        user_id: user
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        setData(data)
        submitData()
    }
    const submitData = async () => {
        await fetch('/user/', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('user')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="title">Title</label>
            <input id='title' value={data.title} onChange={(e) => setData(
                {
                    ...data,
                    title: e.target.value
                }
            )} type="text" />
            <textarea value={data.content} onChange={(e) => setData(
                {
                    ...data,
                    content: e.target.value
                }
            )} name="content" id="content" cols="30" rows="10" />
            <button type='submit'>
                Submit
            </button>
        </form>

    )
}

export default Editor