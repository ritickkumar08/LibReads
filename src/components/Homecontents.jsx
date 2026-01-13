// import {PopularBooks} from "./PopularBooks"
import {fantasy,fiction,Mystery,nonFiction,SciFi} from '../utils/pictures'
import GenreCard, { PopularBook } from './GenreCard'
import { popularBooks } from '../utils/PopularBooks'
import SearchBar from './SearchBar'


function Homecontents() {
    return(
        <div className="grid grid-cols-[2fr_3fr_2fr] grid-rows-5 gap-2 gap-x-5 mt-32 mx-auto max-h-3/4 max-w-[85%]">
            <div className=""><GenreCard image={fantasy} genre="FANTASY"/></div>
            <div className="row-span-5">
                <h1 className='text-center text-3xl font-bold text-white'>Welcome to LibReads — <p className='text-2xl font-medium'>your space to explore, learn, and stay informed.</p></h1>
                <SearchBar/>
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