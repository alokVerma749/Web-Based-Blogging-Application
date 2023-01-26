import { AuthContext } from '../contexts/AuthContext.js';
import { useContext } from 'react'

export const useLogin = () => {
    const { dispatch } = useContext(AuthContext)

    const login = async (credentials) => {
        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        })
        if (response.ok) {
            return dispatch({
                type: "LOGIN",
                payload: true
            })
        }
        dispatch({
            type: "LOGOUT",
            payload: false
        })
    }
    return { login }
}