// footer.jsx
// a component to display footer for the webpage.
// will be shown on every navigating page.

import React from 'react'
import { GiBlackBook } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";


function Footer() {
    return (
        <div className='w-screen h-20 bg-black justify-around flex items-center mt-5'>
            <h1 className="flex text-4xl font-bold p-5 text-amber-50 cursor-pointer"><span><GiBlackBook /></span><span className="">Lib</span>Reads</h1>
            <p className='text-white flex items-center'>© 2026 Online Library | Built with  <FaHeartbeat className='text-red-800 mx-2'/>  by Ritick Kumar</p>
        </div>
    )
}

export default Footer
