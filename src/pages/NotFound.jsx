import React from 'react'
import {useLocation, Link} from 'react-router-dom'

function NotFound() {
    const err = useLocation()
    console.log(err);
    
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-950 p-4">
            <h1 className="text-6xl font-bold text-amber-100 mb-4">404</h1>
            <p className="text-xl text-white mb-2">Page not found</p>
            <p className="text-white mb-6">Invalid URL: <code>{location.pathname}</code></p>


            <Link to="/"className="bg-red-600 text-white px-4 py-2 rounded font-semibold hover:shadow-md shadow-green-500 hover:bg-green-600"> Back to Home</Link>
        </div>  
    )
}

export default NotFound
