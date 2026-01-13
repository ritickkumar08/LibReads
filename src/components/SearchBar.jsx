import React from 'react'

function SearchBar({searched, setSearched}) {
    return (
        <div className="relative w-full max-w-md mt-8 mx-auto">
            <input type="text" onChange={(e)=>setSearched(e.target.value)} value={searched} placeholder='Search for you book or author...'
            className='w-full pl-10 pr-4 py-2 rounded-md bg-transparent border-amber-50 border backdrop-blur-md focus:outline-1 outline-amber-100 text-white'/>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 border-l-2 p-1.5">🔍</span>
        </div>
    )
}

export default SearchBar
