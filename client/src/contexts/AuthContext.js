import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            console.log('logout')
            return { user: action.payload }
        default:
            return state
    }
}
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { user: null })
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('user'))
        if (token) {
            dispatch({
                type: "LOGIN",
                payload: token
            })
        }
    }, [])
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider >
    )

}

