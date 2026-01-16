import React from 'react'
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";

function BookDetails() {
    //getttint the book id from the path.
    const {id} = useParams();

    //accesss the redux tore of books
    const booksList = useSelector((state) => state.books.value)
    console.log(booksList);
    

    //taking that individual book out with the help of id extracted from the path or navigation link.
    const book = booksList.find((item) => item.id === Number(id))
    console.log(book);
    

    return (
        <div className="bg-slate-950 min-h-screen w-full pt-40 ">
            <div  className="max-w-4xl mx-auto bg-white max-h-3xl rounded-b-3xl rounded-l-3xl">
                <style>@import url('https://fonts.googleapis.com/css2?family=Quintessential&display=swap');</style>
                {/* If no book matches, show simple message */}
                {!book && (<p className="text-gray-700 text-lg">Book not found.</p>)}

                {book && (
                <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-10 gap-6">
                    {/* book coverImage */}
                    <img src={book.coverImage} alt="picture of the book" className="w-30 md:w-45 rounded-md border shadow-md shadow-black "/>
                    <div className="flex flex-col w-full md:w-auto p-2 md:p-6">
                        {/* Book Title */}
                        <h3 className="font-[Quintessential] text-3xl md:text-4xl font-semibold mb-1">{book.title} - {book.category}</h3>
                        {/* Author */}
                        <p className="text-gray-600 mb-4"> -{book.author}</p>
                        {/* Description Preview */}
                        <p className="text-black text-sm mb-4">{book.description}</p>
                        <div className='flex justify-between items-center text-sm'>
                            {/* published date Preview */}
                            <p className="text-black  text-sm line-clamp-3 mb-4">published : {book.publishedDate}</p>
                            {/* no of pages */}
                            <p className="text-black  text-sm line-clamp-3 mb-6">{book.pages} pages</p>
                        </div>
                        {/* a container for rating and view details link */}
                        <div className="flex gap-2 justify-between items-center mt-6">
                            {/* Rating */}
                            <p className="text-yellow-500 font-medium">⭐ {book.rating}</p>
                            {/* back Button */}
                            <Link to="/books" className="border-b px-3 py-2 rounded-3xl flex items-center gap-1 shadow-sm shadow-black hover:shadow-lg"> <FaArrowLeft />Back to browse</Link>
                        </div>
                    </div>
                </div>
                )}   
            </div>
        </div>
    )
}

export default BookDetails
