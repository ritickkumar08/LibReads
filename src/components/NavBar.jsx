import { PiBooksFill } from "react-icons/pi";
import { IoIosHome } from "react-icons/io";
import { GiBlackBook } from "react-icons/gi";
import { BiSolidBookAdd } from "react-icons/bi";
import {NavLink} from 'react-router-dom'

function NavBar() {
    return(
        <nav>
            <div className="flex justify-between border max-w-4/5 mx-auto fixed inset-x-0 top-0 bg-transparent z-50 backdrop-blur-none transition-all duration-300 rounded-b-3xl rounded-l-3xl shadow-sm shadow-amber-50 mt-4">
                <h1 className="flex text-6xl font-bold p-5 text-amber-50 cursor-pointer"><span><GiBlackBook /></span><span className="">Lib</span>Reads</h1>
                <ul className="flex gap-10 items-center">
                    <NavLink to='/' className={({isActive}) =>`text-3xl font-semibold flex items-center text-amber-50 cursor-pointer hover:border-b ${isActive ? "text-amber-400":"text-amber-100"}`}><IoIosHome />Home</NavLink>
                    <NavLink to='/books' className={({isActive})=> `text-3xl font-semibold flex items-center text-amber-50 cursor-pointer hover:border-b ${isActive ? "text-amber-400" : "text-amber-100"}`}><PiBooksFill/>Browse Books</NavLink>
                    <NavLink to='/add' className={({isActive}) => `text-2xl flex items-center text-amber-50 px-5 py-3 mr-6 cursor-pointer bg-slate-950 rounded-2xl gap-1 shadow-sm shadow-amber-50 hover:border-b ${isActive ? "text-amber-400" : "text-amber-100"}`}>Add Book<BiSolidBookAdd /></NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar

