import React, { useState } from 'react'

const Login = ({handleLogin}) => {
// console.log(handleLogin);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail('')
        setPassword('')
        
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Welcome Back
                </h2>
                <form className="space-y-5" onSubmit={submitHandler}>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-600 mb-1"
                        >
                            Email address
                        </label>
                        <input 
                        value={email} 
                        onChange={(e)=>{
                            setEmail(e.target.value)
                            
                        }}
                            required
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-600 mb-1"
                        >
                            Password
                        </label>
                        <input
                            value={password}
                            onChange={(e)=>{
                            setPassword(e.target.value)
                            }}
                            required
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-indigo-500 text-white rounded-lg font-medium hover:bg-indigo-600 transition-colors duration-200"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login