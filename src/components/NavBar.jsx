import { PiBooksFill } from "react-icons/pi";
import { IoIosHome } from "react-icons/io";
import { GiBlackBook } from "react-icons/gi";
import { BiSolidBookAdd } from "react-icons/bi";
import {NavLink} from 'react-router-dom'
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

function NavBar() {
    const [mobile, setMobile] = useState(false)

    return(
        <nav className="fixed inset-x-0 top-0 z-50 bg-black/90 backdrop-blur-sm shadow-md">
            <div className="flex justify-between max-w-4/5 mx-auto transition-all duration-300 rounded-b-3xl rounded-l-3xl shadow-sm shadow-amber-50 mt-4">
                {/* App Title */}
                <h1 className="flex items-center text-4xl sm:text-5xl lg:text-6xl font-bold p-5 text-amber-50 cursor-pointer"><span><GiBlackBook /></span><span className="">Lib</span>Reads</h1>
                {/* Navigation Links */}
                <ul className="hidden md:flex gap-10 items-center">
                    {/* NavLink automatically applies active class based on route */}
                    <NavLink to='/' className={({isActive}) =>`text-3xl font-semibold flex items-center text-amber-50 cursor-pointer hover:border-b ${isActive ? "text-amber-400":"text-amber-100"}`}><IoIosHome />Home</NavLink>
                    <NavLink to='/books' className={({isActive})=> `text-3xl font-semibold flex items-center text-amber-50 cursor-pointer hover:border-b ${isActive ? "text-amber-400" : "text-amber-100"}`}><PiBooksFill/>Browse Books</NavLink>
                    <NavLink to='/add' className={({isActive}) => `text-2xl flex items-center text-amber-50 px-5 py-3 mr-6 cursor-pointer bg-slate-950 rounded-2xl gap-1 shadow-sm shadow-amber-50 hover:border-b ${isActive ? "text-amber-400" : "text-amber-100"}`}>Add Book<BiSolidBookAdd /></NavLink>
                </ul>

                {/* Mobile Menu Button */}
                <button className="text-amber-50 text-4xl md:hidden mr-2" onClick={()=>setMobile(!mobile)}>{open ?  <MdOutlineMenu size={36}/> : <HiX/>}</button>
            </div>
            {/* Mobile Dropdown */}
            {mobile && (
                <ul className="md:hidden flex flex-col gap-6 bg-black/95 py-6 px-8 border-t border-amber-500/20">
                    <NavLink to="/" onClick={() => setMobile(false)} className={({ isActive }) =>`text-2xl flex items-center gap-2 ${isActive ? "text-amber-400" : "text-amber-50"}`}><IoIosHome className="text-3xl" /> Home </NavLink>
                    <NavLink to="/books" onClick={() => setMobile(false)} className={({ isActive }) =>`text-2xl flex items-center gap-2 ${isActive ? "text-amber-400" : "text-amber-50"}`}> <PiBooksFill className="text-3xl" /> Browse Books </NavLink>
                    <NavLink to="/add" onClick={() => setMobile(false)} className={({ isActive }) =>`text-2xl flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-xl ${isActive ? "text-amber-400" : "text-amber-50"}`} > Add Book <BiSolidBookAdd className="text-3xl" /> </NavLink>
                </ul>
            )}
        </nav>
    )
}

export default NavBar

