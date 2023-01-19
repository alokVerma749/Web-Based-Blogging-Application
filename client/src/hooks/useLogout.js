import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react"
export const useLogout = () => {
    const { user, setUser } = useContext(AuthContext)
    if (!user) {
        throw new Error('user not exists')
    }
    const logout = () => {
        const token = JSON.parse(localStorage.getItem('user'))
        if (!token) {
            localStorage.removeItem('user')
            setUser(null)
        }
    }
    return { logout }
}