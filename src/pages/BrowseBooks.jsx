import { useState } from 'react'
import SearchBar from '../components/SearchBar'

function BrowseBooks() {
    //a state to keep a track on the searched book.
    const [searched, setSearched] = useState("")

    return(
        <div className="bg-slate-950 min-h-screen w-full">
            <div className="pt-32 max-w-6xl mx-auto">
                <style>@import url('https://fonts.googleapis.com/css2?family=Quintessential&display=swap');</style>
                {/* Page Title */}
                <h1 className="text-3xl font-bold text-primary mb-6 text-white text-center mt-3 font-[Quintessential]">Browse Books</h1>
                <SearchBar searched={searched} setSearched={setSearched}/>
            </div>
        </div>
    )
}

export default BrowseBooks