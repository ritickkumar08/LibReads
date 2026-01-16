// BookCard.jsx
// Reusable component to display book information in card format.
// Used Browse Books page.

import React from "react";
import { GiPocketBow } from "react-icons/gi";
import{Link} from 'react-router-dom'

function BookCard({book}) {
  // console.log(book);
  
  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4 items-center border hover:shadow-lg transition duration-300 flex flex-col sm:flex-row gap-4">
      {/* font import */}
      <style>@import url('https://fonts.googleapis.com/css2?family=Quintessential&display=swap');</style>

      {/* book coverImage */}
      <img src={book.coverImage} alt="picture of the book" className="w-full sm:w-32 h-48 object-cover border-2 shadow-md shadow-black "/>
      <div className="flex flex-col justify-between flex-1">
        {/* Book Title */}
        <h3 className="font-[Quintessential] text-lg sm:text-xl font-semibold mb-1">{book.title}</h3>
        {/* Author */}
        <p className="text-gray-600 text-sm sm:text-base mb-2">{book.author}</p>
        {/* Description Preview */}
        <p className="text-black text-sm line-clamp-3 mb-4">{book.description}</p>
        {/* a container for rating and view details link */}
        <div className="flex gap-2 justify-around items-center">
          {/* Rating */}
          <p className="text-yellow-500 font-medium text-sm sm:text-base">⭐ {book.rating}</p>
          {/* View Details Button */}
          <Link to={`/book/${book.id}`} className="border px-3 py-2 rounded-full flex items-center gap-1 shadow-sm shadow-black hover:shadow-md transition text-sm sm:text-base ">View Details<GiPocketBow size={16}/> </Link>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
