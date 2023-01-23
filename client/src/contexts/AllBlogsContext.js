import { createContext, useReducer } from "react";

export const AllBlogsContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_BLOGS':
            return {
                blogs: action.payload.blogs,
                fetching: false
            }
        case 'CREATE_BLOGS':
            return {
                blogs: [action.payload.blogs, ...state.blogs],
                fetching: false
            }
        default:
            return state;
    }
}
const allBlogs = {
    blogs: null,
    fetching: false
}
export const AllBlogsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, allBlogs)
    return (
        <AllBlogsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AllBlogsContext.Provider>
    )
}