// import {PopularBooks} from "./PopularBooks"
import {fantasy,fiction,Mystery,nonFiction,SciFi} from '../utils/pictures'
import GenreCard, { PopularBook } from './GenreCard'
import { popularBooks } from '../utils/PopularBooks'


function Homecontents() {
    return(
        <div className="grid grid-cols-[2fr_3fr_2fr] grid-rows-5 gap-2 gap-x-5 mt-32 mx-auto max-h-3/4 max-w-[85%]">
            <div className=""><GenreCard image={fantasy} genre="FANTASY"/></div>
            <div className="row-span-5">
                <h1 className='text-center text-3xl font-bold text-white'>Welcome to LibReads — <p className='text-2xl font-medium'>your space to explore, learn, and stay informed.</p></h1>
                <div className="relative w-full max-w-md mt-8 mx-auto">
                    <input type="text" placeholder="search for books..." className="w-full pl-10 pr-4 py-2 rounded-md bg-transparent border-amber-50 border backdrop-blur-md focus:outline-1 outline-amber-100 text-white"/> 
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 border-l-2 p-1.5">🔍</span>
                </div>
            </div>
            <section className="row-span-5">
                <h2 className="text-2xl font-semibold mb-4 text-white text-center border-b">Popular Books</h2>
                <div>
                    {popularBooks.map((book)=>(
                        <PopularBook key={book.id} image={book.coverImage} author={book.author} bookName={book.title}/>
                    ))}
                </div>
            </section>
            <div className=""><GenreCard image={fiction} genre="FICTION"/></div>
            <div className=""><GenreCard image={Mystery} genre="MYSTERY"/></div>
            <div className=""><GenreCard image={nonFiction} genre="Non-Fiction"/></div>
            <div className=""><GenreCard image={SciFi} genre="Sci-Fi"/></div>
        </div>
    )
}

 export default Homecontents