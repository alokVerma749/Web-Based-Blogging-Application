import { createContext, useEffect, useState } from "react";

const BlogsContext = createContext()

const BlogsContextProvider = ({ children }) => {
    const [blogs, setBlogs] = useState({})
    useEffect(() => {
        
    })
    return (
        <BlogsContext.Provider>
            {children}
        </BlogsContext.Provider>
    )
}