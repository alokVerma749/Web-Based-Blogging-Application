import { NavLink, Link } from "react-router-dom"
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react'
import { useLogout } from '../hooks/useLogout'
const Navbar = () => {
    const { user } = useContext(AuthContext)
    const { logout } = useLogout()
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 roundedFull" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Tailblocks</span>
                </Link>
                <nav className="md:ml-auto md:mr-auto space-x-3 flex flex-wrap items-center text-base justify-center">
                    <NavLink to='/' className="mr-5 hover:text-gray-900">Home</NavLink>
                    <NavLink to='/user' className="mr-5 hover:text-gray-900">My Blogs</NavLink>
                    <NavLink to='/blogs' className="mr-5 hover:text-gray-900">About</NavLink>
                    <NavLink to='/blogs' className="mr-5 hover:text-gray-900">Contact Us</NavLink>
                </nav>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    {user ? <div onClick={logout} className="mr-5 hover:text-gray-900">Logout</div> : <Link to='/auth/login' className="mr-5 hover:text-gray-900">Login</Link>}
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Navbar