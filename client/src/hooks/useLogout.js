import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react"
export const useLogout = () => {
    const { setUser } = useContext(AuthContext)
    if (!setUser) {
        throw new Error('user not exists')
    }
    const logout = async () => {
        await setUser(null)
        const token = localStorage.removeItem('user')
        if (!token) {
        }
        localStorage.removeItem('user')
    }
    return { logout }
}