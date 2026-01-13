// GenreCard.jsx
// Reusable component to display genre information in card format.
// Used in Home page (Popular Books) and genreCard to display differnet genres.

import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function GenreCard({image, genre}) {
  return (
    <div className="flex text-white items-center gap-2">
      <style>@import url('https://fonts.googleapis.com/css2?family=Quintessential&display=swap');</style>

      <img src={image} alt="image for the genre" className="max-h-full max-w-25 border-r-2 rounded-l-lg" />
      <h1 className="font-[Quintessential] text-3xl flex gap-3 items-center">{genre}<span><MdKeyboardDoubleArrowRight className="text-3xl hover:shadow-sm shadow-amber-100 hover:cursor-pointer"/></span></h1>
    </div>
  );
}

export function PopularBook({image, author,bookName}) {
  return(
    <div className="flex text-amber-50 gap-2 items-end justify-end">
      <style>@import url('https://fonts.googleapis.com/css2?family=Quintessential&display=swap');</style>
      <p className="items-center">
        <h2 className="font-[Quintessential] text-2xl flex gap-3 items-center">{bookName}</h2>
        <h2>{author}</h2>
      </p>
      <img src={image} alt="image of the book" className="h-18 ml-1 my-1 hover:shadow hover:cursor-pointer"/>
    </div>
  )
}


export default GenreCard;
