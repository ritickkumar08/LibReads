// BookCard.jsx
// Reusable component to display book information in card format.
// Used Browse Books page.

import React from "react";
import{Link} from 'react-router-dom'

function BookCard({book}) {
  return (
    <div className="h-30 bg-white rounded-lg shadow-md p-4 border hover:shadow-lg transition duration-200 flex flex-col justify-between">
      {/* book coverImage */}
      <img src={book.coverImage} alt="picture of the book" className="h-20"/>
      {/* Book Title */}
      <h3 className="text-xl font-semibold text-primary mb-1">{book.title}</h3>
      {/* Author */}
      <p className="text-gray-600 mb-2">{book.author}</p>
      {/* Rating */}
      <p className="text-yellow-500 font-medium mb-3">⭐ {book.rating}</p>
      {/* Description Preview */}
      <p className="text-gray-700 text-sm line-clamp-3 mb-4">{book.description}</p>
      {/* View Details Button */}
      <Link to={`/book/${book.id}`} className="mt-auto inline-block bg-primary text-white py-2 px-3 rounded hover:bg-indigo-700 text-center"> View Details</Link>
    </div>
  );
}

export default BookCard;
