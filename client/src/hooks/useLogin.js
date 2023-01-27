import { AuthContext } from '../contexts/AuthContext.js';
import { useContext } from 'react'

export const useLogin = () => {
    const { dispatch } = useContext(AuthContext)

    const login = async (credentials) => {
        try {
            const response = await fetch('/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            })
            const data = await response.json()
            if (response.ok) {
                return dispatch({
                    type: "LOGIN",
                    payload: {
                        login: data.success,
                        name: 'UserName'
                    }
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    return { login }
}