'use client';

import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import { useMenu } from "./MenuContext";
import Image from "next/image";




function MobileNavigation({ session }) {
    const { closeMenu, showMenu } = useMenu();
    return (
        <nav className={`w-full fixed top-0 right-0 z-50 bg-[#141C24] p-5 sm:hidden
        ${showMenu ? '-translate-x-0' : 'translate-x-full'} transition-all`}>
            <button className="mb-7" onClick={closeMenu}>
                <IoCloseSharp size='2rem' />
            </button>
            <ul className={` flex-col gap-5 h-full text-lg `}>
                <li>
                    <Link
                        href="/cabins"
                        className="hover:text-accent-400 transition-colors"
                    >
                        Cabins
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className="hover:text-accent-400 transition-colors"
                    >
                        About
                    </Link>
                </li>
                <li>
                    {session?.user?.image ? (
                        <Link
                            href="/account"
                            className="hover:text-accent-400 transition-colors flex items-center gap-4"
                        >
                            <Image
                                width={8}
                                height={8}
                                className="h-8 rounded-full"
                                src={session.user.image}
                                alt={session.user.name}
                                referrerPolicy="no-referrer"
                            />
                            <span>Guest area</span>
                        </Link>
                    ) : (
                        <Link
                            href="/account"
                            className="hover:text-accent-400 transition-colors"
                        >
                            Guest area
                        </Link>
                    )}
                </li>
            </ul>
        </nav>

    );
}

export default MobileNavigation;
