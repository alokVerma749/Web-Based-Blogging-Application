import { createContext, useReducer } from "react";

export const UserBlogsContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_BLOGS':
            return {
                userBlogs: action.payload,
            }
        default:
            return state;
    }
}

export const UserBlogsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { userBlogs: null })
    return (
        <UserBlogsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </UserBlogsContext.Provider>
    )
}