import { createContext, useState } from "react";

export const AllBlogsContext = createContext()

export const AllBlogsContextProvider = ({ children }) => {
    const [blogs, setBlogs] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    return (
        <AllBlogsContext.Provider value={{ blogs, setBlogs, isLoading, setIsLoading }}>
            {children}
        </AllBlogsContext.Provider>
    )
}