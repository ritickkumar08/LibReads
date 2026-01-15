// BookCard.jsx
// Reusable component to display book information in card format.
// Used Browse Books page.

import React from "react";
import { GiPocketBow } from "react-icons/gi";
import{Link} from 'react-router-dom'

function BookCard({book}) {
  // console.log(book);
  
  return (
    <div className="h-60 bg-white rounded-lg shadow-md p-1 items-center border hover:shadow-lg transition duration-200 flex">
      {/* font import */}
      <style>@import url('https://fonts.googleapis.com/css2?family=Quintessential&display=swap');</style>

      {/* book coverImage */}
      <img src={book.coverImage} alt="picture of the book" className="h-50 border-2 shadow-md shadow-black mr-2"/>
      <div className="flex flex-col justify-between">
        {/* Book Title */}
        <h3 className="font-[Quintessential] text-xl font-semibold mb-1">{book.title}</h3>
        {/* Author */}
        <p className="text-gray-600 mb-2">{book.author}</p>
        {/* Description Preview */}
        <p className="text-gray-700 text-sm line-clamp-3 mb-4">{book.description}</p>
        {/* a container for rating and view details link */}
        <div className="flex gap-2 justify-around items-center">
          {/* Rating */}
          <p className="text-yellow-500 font-medium">⭐ {book.rating}</p>
          {/* View Details Button */}
          <Link to={`/book/${book.id}`} className="border px-3 py-2 rounded-3xl flex items-center gap-1 shadow-sm shadow-black hover:shadow-lg">View Details<GiPocketBow /> </Link>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
