import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        })
        const json = await response.json()
        const token = await json.token
        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(token))
            
        }
    }
    return (
        <div className="flex flex-col mx-auto max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                <p className="text-sm text-gray-600">Sign in to access your account</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-12 ng-untouched ng-pristine ng-valid">
                <div className="space-y-4">
                    <div>
                        <label for="email" className="block mb-2 text-sm">Email address</label>
                        <input required value={credentials.email} onChange={(e) => setCredentials({
                            ...credentials,
                            email: e.target.value
                        })} type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label for="password" className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-600">Forgot password?</a>
                        </div>
                        <input required value={credentials.password} onChange={(e) => setCredentials({
                            ...credentials,
                            password: e.target.value
                        })} type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-indigo-600 text-gray-50">Sign in</button>
                    </div>
                    <p className="px-6 text-sm text-center text-gray-600">Don't have an account yet?
                        <Link to='/auth/signup' className="hover:underline text-indigo-600">Sign up</Link>.
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login