import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { token: action.payload.token, userName: action.payload.userName }
        case 'LOGOUT':
            return { token: action.payload.token, userName: null }
        default:
            return state
    }
}
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { token: null, userName: null })
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

