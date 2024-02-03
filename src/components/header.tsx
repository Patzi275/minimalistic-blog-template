"use client";

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Header() {
    const [open, setOpen] = useState(false);
    const iconsSize = 32;

    const handleOpen = () => {
        setOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const handleClose = () => {
        setOpen(false);
        document.body.style.overflow = 'unset';
    };

    const navLinkClassName = "text-3xl font-bold sm:text-base";
    const optionClassName = "text-xs font-normal sm:text-base"

    return (
        <header className="mb-16 flex items-center justify-between sm:mb-24">
            <h1 className="text-xl font-extrabold"><span>&#10100;</span> My tech blog <span>&#10101;</span></h1>
            <div className={`fixed right-0 top-0 ${open ? 'flex' : 'hidden'} z-10 size-full gap-4 bg-white/95 sm:static sm:flex sm:size-min sm:bg-transparent`}>
                <button className="absolute right-8 top-8 sm:hidden" onClick={handleClose}><IoClose size={iconsSize} /></button>
                <ul className="container mx-20 mt-32 flex flex-col gap-8 sm:mx-0 sm:mt-0 sm:flex-row sm:gap-4">
                    <li><Link href="/" className={navLinkClassName} onClick={handleClose}>Home</Link></li>
                    <li><Link href="/posts" className={navLinkClassName} onClick={handleClose}>Posts</Link></li>
                    <li><Link href="/about" className={navLinkClassName} onClick={handleClose}>About</Link></li>
                    <li>
                        <select className={"bg-transparent text-gray-400 " + navLinkClassName} name="languages" id="languages">
                            <option className={optionClassName} value="en">English</option>
                            <option className={optionClassName} value="es">Spanish</option>
                            <option className={optionClassName} value="fr">French</option>
                        </select>
                    </li>
                </ul>
            </div>
            <button className="sm:hidden" onClick={handleOpen}><GiHamburgerMenu size={iconsSize} /></button>
        </header>
    );
};