// import {PopularBooks} from "./PopularBooks"
import {fantasy,fiction,Mystery,nonFiction,SciFi} from '../utils/pictures'
import GenreCard, { PopularBook } from './GenreCard'
import { popularBooks } from '../utils/PopularBooks'
import SearchBar from './SearchBar'
import {Link} from 'react-router-dom'


function Homecontents() {
    // console.log(popularBooks);
    return(
        
        <div className="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-[2fr_3fr_2fr] gap-2 gap-x-5 mt-32 mx-auto max-w-[85%]">
            {/* Left Column Genre Card */}
            <Link to="/books/fantasy" className="hidden lg:block"><GenreCard image={fantasy} genre="FANTASY"/></Link>

            {/* Center Section */}
            <div className="row-span-5">
                <h1 className='text-center text-3xl font-bold text-white'>Welcome to LibReads — <p className='text-2xl font-medium'>your space to explore, learn, and stay informed.</p></h1>
                <Link to='/books'><SearchBar/></Link> 
            </div>
             {/* Right Column Popular Books */}
            <section className="row-span-5">
                <h2 className="text-2xl font-semibold mb-4 text-white text-center border-b">Popular Books</h2>
                <div>
                    {popularBooks.map((book)=>(
                        <Link  to={`/book/${book.id}`} key={book.id}>
                            <PopularBook image={book.coverImage} author={book.author} bookName={book.title}/>
                        </Link>   
                    ))}
                </div>
            </section>
            {/* Bottom Genre Cards */}
            <Link to="/books/fiction" className=""><GenreCard image={fiction} genre="FICTION"/></Link>
            <Link to="/books/mystery" className=""><GenreCard image={Mystery} genre="MYSTERY"/></Link>
            <Link to="/books/non-fiction" className=""><GenreCard image={nonFiction} genre="Non-Fiction"/></Link>
            <Link to="/books/sci-fi" className=""><GenreCard image={SciFi} genre="Sci-Fi"/></Link>
        </div>
    )
}

 export default Homecontents