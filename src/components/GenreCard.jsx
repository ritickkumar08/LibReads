// GenreCard.jsx
// Reusable component to display genre information in card format.
// Used in Home page (Popular Books) and genreCard to display differnet genres.

import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function GenreCard({image, genre}) {
  return (
    <div className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600  rounded-l-lg  text-white ">
      <style>@import url('https://fonts.googleapis.com/css2?family=Quintessential&display=swap');</style>

      {/* Genre Image */}
      <img src={image} alt="image for the genre" className="max-h-full w-25 border-r-2 rounded-l-lg" />
      {/* Genre Name */}
      <h1 className="font-[Quintessential] text-xl sm:text-3xl flex gap-3 items-center">{genre}<span><MdKeyboardDoubleArrowRight className="sm:text-3xl text-xl hover:cursor-pointer"/></span></h1>
    </div>
  );
}

export function PopularBook({image, author,bookName}) {
  return(
    <div className="flex gap-2 items-end justify-end w-full">
      <style>@import url('https://fonts.googleapis.com/css2?family=Quintessential&display=swap');</style>

       {/* Book Info */}
      <div className="items-center text-amber-50 ">
        <h2 className="font-[Quintessential] text-lg sm:text-2xl flex gap-3 items-center">{bookName}</h2>
        <h2 className="text-sm sm:text-base opacity-90">{author}</h2>
      </div>
      {/* Book Image */}
      <img src={image} alt="image of the book" className="w-12 h-18 ml-1 my-0.5 hover:shadow-sm shadow-amber-50 hover:cursor-pointer object-cover "/>
    </div>
  )
}


export default GenreCard;
