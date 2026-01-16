

import React from 'react'

function SearchBar({searched, setSearched}) {
    return (
        <div className="relative w-full max-w-lg mt-8 mx-auto px-3 sm:px-0">
            <input type="text" onChange={(e)=>setSearched(e.target.value)} value={searched} placeholder='Search for you book or author...'
            className='w-full pl-12 pr-4 py-3 rounded-md bg-transparent border-amber-200/60 border backdrop-blur-xl focus:outline-1 outline-amber-100 text-white placeholder:text-gray-300 transition-all'/>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 border-l-2 p-1.5">🔍</span>
        </div>
    )
}

export default SearchBar
