// AddBook.jsx
// Page containing a form to add a new book to the library using Redux state management.
// Includes form validation and redirects user to Browse Books after successful submission.

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../redux/booksSlice'
import { useNavigate } from 'react-router-dom'

function AddBook() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [category, setCategory] = useState("")
    const [rating, setRating] = useState("")
    const [description, setDescription] = useState("")
    const [coverImage, setCoverImage] = useState("")

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
        if (!coverImage.trim()) newErrors.coverImage = "Please add a cover image URL.";


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
            rating: Number(rating),
            description,
            coverImage,
        } 

        //dispatch redux action - to add a book to the end of the list
        dispatch(addBook(newbook))

        // Redirect user to browse page
        navigate("/books");
    }


    return (
        <div className="bg-slate-950 min-h-screen w-full pt-40 px-3 sm:px-0">
            <div className="max-w-3xl mx-auto mt-8 bg-white shadow-lg p-8 rounded-lg">
                <h1 className="text-3xl font-bold text-black mb-6 text-center">Add a new Book.</h1>

                <form action="" onSubmit={handleSubmit} className="space-y-5">
                    {/* Title Field */}
                    <div>
                        <label className="block mb-1 font-medium">Title</label>
                        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-primary"/>
                        {errors.title && <p className="text-red-600 text-sm">{errors.title}</p>}
                    </div>

                    {/* Author Field */}
                    <div>
                        <label className="block mb-1 font-medium">Author</label>
                        <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-primary"/>
                        {errors.author && <p className="text-red-600 text-sm">{errors.author}</p>}
                    </div>

                    {/* Category Field */}
                    <div>
                        <label className="block mb-1 font-medium">Category</label>
                        <select type="text" value={category} onChange={(e)=>{setCategory(e.target.value)}} className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-primary">
                            <option value="">Select category</option>
                            <option value="fiction">Fiction</option>
                            <option value="non-fiction">Non-Fiction</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="sci-fi">Sci-Fi</option>
                            <option value="mystery">Mystery</option>
                        </select>
                        {errors.category && <p className="text-red-600 text-sm">{errors.category}</p>}
                    </div>

                    {/* Cover Image URL */}
                    <div>
                        <label className='block mb-1 font-semibold'>Cover image of the book</label>
                        <input type="text" className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-amber-400" value={coverImage} onChange={(e) => setCoverImage(e.target.value)}/>
                        {errors.coverImage && <p className="text-red-600 text-sm">{errors.coverImage}</p>}
                    </div>

                    {/* Rating Field */}
                    <div>
                        <label className="block mb-1 font-medium">Rating (1-5)</label>
                        <input type="number" value={rating} onChange={(e) => {setRating(e.target.value)}} className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-primary" min="1" max="5"/>
                        {errors.rating && <p className="text-red-600 text-sm">{errors.rating}</p>}
                    </div>

                    {/* Description Field */}
                    <div>
                        <label className="block mb-1 font-medium">Description</label>
                        <textarea type="text" value={description} onChange={(e) => {setDescription(e.target.value)}} className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-primary"/>
                        {errors.description && <p className="text-red-600 text-sm">{errors.description}</p>}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className='w-full border bg-red-600 text-white py-3 rounded font-semibold hover:shadow-md shadow-green-500 hover:bg-green-600'>Add Book</button>
                </form>
            </div>
        </div>
    )
}

export default AddBook
