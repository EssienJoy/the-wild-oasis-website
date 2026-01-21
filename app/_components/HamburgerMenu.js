'use client';

import { IoMdMenu } from "react-icons/io";
import { useMenu } from "./MenuContext";


function HamburgerMenu() {
    const { openMenu } = useMenu();
    return (
        <button onClick={openMenu} className="sm:hidden z-30">
            <IoMdMenu size='2rem' />
        </button>
    );
}

export default HamburgerMenu;
