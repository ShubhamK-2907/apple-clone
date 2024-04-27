import React from "react";
import {appleImg, bagImg, searchImg} from "../utils/index.js";
import { navLists } from "../constants/index.js";

const Navbar = () => {

    return (
        <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
            <nav className='flex w-full screen-max-width'>
                <img src={appleImg} alt={'Apple'} width={18} height={18} className='cursor-pointer' onClick={() => window.location.reload()}/>
                <div className='flex flex-1 justify-center max-sm:hidden'>
                    {
                        navLists.map((navItem, index) => (
                            <div className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
                                {navItem}
                            </div>
                        ))
                    }
                </div>
                <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                    <img src={searchImg} alt={'Search'} width={18} height={18}/>
                    <img src={bagImg} alt={'Bag'} width={18} height={18}/>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
