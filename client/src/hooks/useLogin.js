import { AuthContext } from "../contexts/AuthContext.js"
import { useContext } from "react"

export const useLogin = () => {
    const { dispatch } = useContext(AuthContext)
    const login = async (credentials) => {
        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        })
        const json = await response.json()
        if (response.ok) {
            const token = await json.token
            const userName = await json.userName
            localStorage.setItem('user', JSON.stringify(token))
            dispatch({
                type: "LOGIN",
                payload: {
                    token: token,
                    userName: userName
                }
            })
        }
    }
    return { login }
}