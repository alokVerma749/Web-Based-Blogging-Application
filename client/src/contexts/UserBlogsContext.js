import { useState, createContext } from "react";

export const UserBlogsContext = createContext()

export const UserBlogsContextProvider = ({ children }) => {
    // TODO:check parameter of useState
    const [userBlogs, setUserBlogs] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    return (
        <UserBlogsContext.Provider value={{ userBlogs, setUserBlogs, isLoading, setIsLoading }}>
            {children}
        </UserBlogsContext.Provider>
    )
}