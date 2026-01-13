// BookCard.jsx
// Reusable component to display book information in card format.
// Used Browse Books page.

import React from "react";
import{Link} from 'react-router-dom'

function BookCard({book}) {
  return (
    <div className="h-30">
      <img src={book.coverImage} alt="picture of the book" className="h-20"/>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <Link to={`/book/${book.id}`}> View Details</Link>
    </div>
  );
}

export default BookCard;
