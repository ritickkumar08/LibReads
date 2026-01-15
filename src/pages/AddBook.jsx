// AddBook.jsx
// Page containing a form to add a new book to the library using Redux state management.
// Includes form validation and redirects user to Browse Books after successful submission.

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../redux/booksSlice'
import { useNavigate } from 'react-router-dom'

function AddBook() {
    const dispatch = useDispatch()
    const navigate = useNavigate

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [category, setCategory] = useState("")
    const [rating, setRating] = useState("")
    const [description, setDescription] = useState("")

    //validation state to keep a check on the errors.
    const [errors, setErrors] = useState({})

    //a function to check for the correct inputs
    const validate = () => {
        const newErrors = {}

        if(!title.trim()) newErrors.title = "Title can't be empty"
        if(!author.trim()) newErrors.author = "author required"
        if(!category.trim()) newErrors.category = "please mention a category"
        if(!rating.trim() || Number(rating)<1 || Number(rating) > 5) newErrors.rating = "rating must be a number between 1 to 5"
        if(!description.trim() || description.length) newErrors.description = "description is a must to ease readers."

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    } 

    // Handle form submit
    const handleSubmit =(e) => {
        e.preventDefault()

        if(!validate()) return; 

        //a new book object
        const newbook = {
            id: Date.now(),
            title,
            author,
            category,
            rating,
            description,
        } 

        //dispatch redux action - to add a book to the end of the list
        dispatch(addBook(newbook))

        // Redirect user to browse page
        navigate("/books");
    }


    return (
        <div className="bg-slate-950 h-screen w-full pt-40">
            <div className="max-w-3xl mx-auto mt-8 bg-white shadow-lg p-8 rounded-lg">
                <h1 className="text-3xl font-bold text-black mb-6 text-center">Add a new Book.</h1>

                <form action="" onSubmit={handleSubmit} className="space-y-5">
                    {/* Title Field */}
                    <div>
                        <label className="block mb-1 font-medium">Title</label>
                        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-primary"/>
                        {errors.category && <p className="text-red-600 text-sm">{errors.category}</p>}
                    </div>

                    {/* Author Field */}
                    <div>
                        <label className="block mb-1 font-medium">Author</label>
                        <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-primary"/>
                        {errors.category && <p className="text-red-600 text-sm">{errors.category}</p>}
                    </div>

                    {/* Category Field */}
                    <div>
                        <label className="block mb-1 font-medium">Category</label>
                        <input type="text" value={category} onChange={(e)=>{setCategory(e.target.value)}} className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-primary"/>
                        {errors.category && <p className="text-red-600 text-sm">{errors.category}</p>}
                    </div>

                    {/* Rating Field */}
                    <div>
                        <label className="block mb-1 font-medium">Rating (1-5)</label>
                        <input type="text" value={rating} onChange={(e) => {setRating(e.target.value)}} className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-primary"/>
                        {errors.category && <p className="text-red-600 text-sm">{errors.category}</p>}
                    </div>

                    {/* Description Field */}
                    <div>
                        <label className="block mb-1 font-medium">Description</label>
                        <input type="text" value={description} onChange={(e) => {setDescription(e.target.value)}} className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-primary"/>
                        {errors.category && <p className="text-red-600 text-sm">{errors.category}</p>}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className='w-full border bg-red-600 text-white py-3 rounded font-semibold hover:shadow-md shadow-green-500 hover:bg-green-600'>Add Book</button>
                </form>
            </div>
        </div>
    )
}

export default AddBook
