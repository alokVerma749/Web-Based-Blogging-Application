import { createContext, useReducer } from "react";

export const AuthContext = createContext()

const reducer = (state, action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'LOGIN':
            return { login: action.payload.login, name: action.payload.name || 'userName' }
        default:
            return state
    }
}
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { login: false, name: 'User' })
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider >
    )
}

