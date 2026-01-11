import { PiBooksFill } from "react-icons/pi";
import { IoIosHome } from "react-icons/io";
import { GiBlackBook } from "react-icons/gi";
import { BiSolidBookAdd } from "react-icons/bi";

function NavBar() {
    return(
        <nav>
            <div className="flex justify-between border max-w-4/5 mx-auto fixed inset-x-0 top-0 bg-transparent z-50 backdrop-blur-none transition-all duration-300 rounded-b-3xl rounded-l-3xl shadow-sm shadow-amber-50 mt-4">
                <h1 className="flex text-6xl font-bold p-5 text-amber-50 cursor-pointer"><span><GiBlackBook /></span><span className="">Lib</span>Reads</h1>
                <ul className="flex gap-10 items-center">
                    <li className="text-3xl font-semibold flex items-center text-amber-50 cursor-pointer"><IoIosHome />Home</li>
                    <li className="text-3xl font-semibold flex items-center text-amber-50 cursor-pointer"><PiBooksFill/>Browse Books</li>
                    <li className="text-2xl flex items-center text-amber-50 px-5 py-3 mr-6 cursor-pointer bg-slate-950 rounded-2xl gap-1 shadow-sm shadow-amber-50">Add Book<BiSolidBookAdd /></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar