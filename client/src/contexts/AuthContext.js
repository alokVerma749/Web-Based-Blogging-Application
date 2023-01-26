import { createContext, useReducer } from "react";

export const AuthContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { login: action.payload }
        default:
            return state
    }
}
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { login: false })
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider >
    )
}

