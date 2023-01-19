import { NavLink, Link } from "react-router-dom"
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react'
const Navbar = () => {
    const { user } = useContext(AuthContext)
    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span class="ml-3 text-xl">Tailblocks</span>
                </a>
                <nav class="md:ml-auto md:mr-auto space-x-3 flex flex-wrap items-center text-base justify-center">
                    <NavLink to='/user' class="mr-5 hover:text-gray-900">My Blogs</NavLink>
                    <NavLink to='/blogs' class="mr-5 hover:text-gray-900">About ME</NavLink>
                    <NavLink to='/blogs' class="mr-5 hover:text-gray-900">Contact ME</NavLink>
                </nav>
                <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    {user ? <Link to='/auth/logout' class="mr-5 hover:text-gray-900">Logout</Link> : <Link to='/auth' class="mr-5 hover:text-gray-900">Signup</Link>}

                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Navbar