'use client';

import Link from "next/link";
import { MdMenuOpen } from "react-icons/md";
import SignOutButton from "./SignOutButton";
import {
    CalendarDaysIcon,
    HomeIcon,
    UserIcon,
} from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    {
        name: "Home",
        href: "/account",
        icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
    },
    {
        name: "Reservations",
        href: "/account/reservations",
        icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
    },
    {
        name: "Guest profile",
        href: "/account/profile",
        icon: <UserIcon className="h-5 w-5 text-primary-600" />,
    },
];

function SideNavigationMobile() {
    const [toggleMenu, setToggleMenu] = useState(true);
    const pathname = usePathname();
    return (
        <div className="sm:hidden relative">
            <button onClick={() => setToggleMenu((menu) => !menu)} className="self-start">
                <MdMenuOpen size='2rem' />
            </button>

            {toggleMenu && <ul className="sm:flex flex-col gap-2 h-full text-lg relative top-0 left-0 z-50">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <Link
                            className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${pathname === link.href ? "bg-primary-900" : ""
                                }`}
                            href={link.href}
                        >
                            {link.icon}
                            <span>{link.name}</span>
                        </Link>
                    </li>
                ))}

                <li className="mt-auto">
                    <SignOutButton />
                </li>
            </ul>}
        </div>
    );
}

export default SideNavigationMobile;
