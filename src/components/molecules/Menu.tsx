import React, {useState} from "react";
import { NavLink } from "../atoms";

import { BiMenu, BiX } from 'react-icons/bi'

export const Menu = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
        <div className="w-full max-w-[1240px] m-auto flex justify-between items-center p-4">
            <div onClick={() => setToggle(!toggle)} className="block z-10 text-3xl absolute right-2 top-5 cursor-pointer md:hidden">
            {toggle ? <BiX size={30} className="fill-white"/> : <BiMenu size={30} className="fill-white" /> }
            </div>
                <ul className={`flex flex-col items-center py-8 md:flex md:items-center absolute bg-[#102543] left-0 w-full md:pl-0 transition-all duration-500 ease in ${toggle ? 'top-16' : 'top-[-490px]'}`}>
                    <li className="p-3 text-4xl">
                        <NavLink name="Home" link="/" />
                    </li>
                    <li className="p-3 text-4xl">
                        <NavLink name="About" link="/about" />
                    </li>
                    <li className="p-3 text-4xl">
                        <NavLink name="Projects" link="/projects" />
                    </li>
                    <li className="p-3 text-4xl">
                        <NavLink name="Sponsors" link="/sponsors" />
                    </li>
                    <li className="p-3 text-4xl">
                        <NavLink name="Contact" link="/contact" />
                    </li>
                </ul>
        </div>
    </div>
  );
};
