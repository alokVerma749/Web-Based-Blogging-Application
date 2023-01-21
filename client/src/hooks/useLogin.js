import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react"

export const useLogin = () => {
    const { setUser } = useContext(AuthContext)
    const login = async (credentials) => {
        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        })
        const json = await response.json()
        if (response.ok) {
            const token = await json.token
            localStorage.setItem('user', JSON.stringify(token))
            setUser(token)
        }
    }
    return { login }
}