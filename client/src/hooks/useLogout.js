import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react"
export const useLogout = () => {
    const { dispatch } = useContext(AuthContext)
    const logout = async () => {
        await dispatch({
            type: 'LOGOUT',
            payload: null
        })
        localStorage.removeItem('user')
    }
    return { logout }
}