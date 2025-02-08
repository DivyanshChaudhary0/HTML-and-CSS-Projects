

import { IoSearchSharp } from "react-icons/io5";
import { MdOutlinePersonalVideo } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdLocalOffer } from 'react-icons/md'


function Header(){
    return (
        <div className="nav flex items-center justify-between px-32 py-4 bg-white text-black shadow-md">
            <div>
                <Link to='/'>
                    <img src="./public/swiggy.webp" alt="" className="w-14 cursor-pointer" />
                </Link>
            </div>
            <div className="flex items-center gap-16 list-none">
                <Link to='/search'>
                <li className="text-lg cursor-pointer hover:text-orange-500 flex items-center gap-2">
                    <span className="mt-1"> <IoSearchSharp/> </span>
                    Search
                </li>
                </Link>
                <Link to='/offers'>
                <li className="text-lg cursor-pointer hover:text-orange-500 flex items-center gap-2">
                    <span className="mt-1"><MdLocalOffer/></span>
                    Offers
                </li>
                </Link>
                <Link to="/about">
                <li className="text-lg cursor-pointer hover:text-orange-500 flex items-center gap-2">
                    <span className="mt-1"> <MdOutlinePersonalVideo/> </span>
                    About
                </li>
                </Link>
                <Link to="/cart">
                <li className="text-lg cursor-pointer hover:text-orange-500 flex items-center gap-2">
                    <span className="mt-1"> <FaCartPlus/> </span>
                    Cart
                </li>
                </Link>
                <Link to="/sign_in">
                <li className="text-lg cursor-pointer hover:text-orange-500 flex items-center gap-2">
                    <span className="mt-1"> <IoPersonSharp/> </span>
                    Sign In
                </li>
                </Link>
                
            </div>
        </div>
    )
}

export default Header;