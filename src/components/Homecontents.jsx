import {PopularBooks} from "./PopularBooks"


function Homecontents() {
    return(
        <div className="grid grid-cols-3 grid-rows-5 gap-2 mt-32  mx-auto max-h-3/4 border-2 border-amber-50">
            <div className="bg-gray-700">genre0</div>
            <div className="bg-gray-700 row-span-5">
                <h1>Welcome to LibReads — <p>your space to explore, learn, and stay informed.</p></h1>
                <div className="relative w-full max-w-md">
                    <input type="text" placeholder="search for books..." className="w-full pl-10 pr-4 py-2 rounded-md bg-white/70 backdrop-blur-md focus:outline-none"/> 
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 border-l-2 p-1.5">🔍</span>
                </div>
            </div>
            <div className="bg-gray-700 row-span-5">
                <PopularBooks/>
            </div>
            <div className="bg-gray-700">genre3</div>
            <div className="bg-gray-700">genre4</div>
            <div className="bg-gray-700">genre5</div>
            <div className="bg-gray-700">genre6</div>
        </div>
    )
}

 export default Homecontents