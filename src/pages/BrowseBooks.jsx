import { useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar'
import {useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import BookCard from '../components/BookCard'

function BrowseBooks() {
    //extracting category from the dynamic route
    const {category} = useParams()

    // Get books array from Redux store
    const booksList = useSelector((state) => state.books.value)

    //a state to keep a track on the searched book.
    const [searched, setSearched] = useState("")

    // Re-run filtering when category or search changes
    const filteredBooks = useMemo(() => {
        let updated = booksList

        // If category exists in URL, match it
        if(category){
            updated = updated.filter(
                (book)=>book.category.toLowerCase() === category.toLowerCase()
            )
        }

        // Apply search filter for title or author
        if(searched.trim() !== ""){
            const term = searched.toLowerCase()
            updated = updated.filter(
                (book)=> 
                    book.title.toLowerCase().includes(term) ||
                    book.author.toLowerCase().includes(term)
            )
        }
        // Update the final list
        // console.log(updated);
        return updated
    },[category, searched, booksList])
    // console.log(filteredBooks);
    
    return(
        <div className="bg-slate-950 min-h-screen w-full">
            <div className="pt-28 md:pt-32 max-w-6xl mx-auto px-4 md:px-0">
                <style>@import url('https://fonts.googleapis.com/css2?family=Quintessential&display=swap');</style>
                {/* Page Title */}
                <h1 className="text-3xl font-bold mb-6 text-white text-center mt-3 font-[Quintessential]">Browse Books</h1>
                {/* Search Bar */}
                <SearchBar searched={searched} setSearched={setSearched}/>

                {/* Books Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 place-items-center">
                    {filteredBooks.length > 0 ? 
                        (filteredBooks.map((book)=> <BookCard key={book.id} book={book}/>)) :
                        (<p className="text-gray-600 col-span-full">No books found</p>)
                    }
                </div>
            </div>
        </div>
    )
}

export default BrowseBooks