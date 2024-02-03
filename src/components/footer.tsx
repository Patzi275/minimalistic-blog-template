import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareThreads, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    const iconSize = 32;
    return (
        <footer className="mt-16 flex flex-col items-center gap-4">
            <div className="flex justify-center gap-2 opacity-80">
                <a href=""><MdEmail size={iconSize} /></a>
                <a href=""><FaGithub size={iconSize} /></a>
                <a href=""><FaFacebook size={iconSize} /></a>
                <a href=""><FaYoutube size={iconSize} /></a>
                <a href=""><FaXTwitter size={iconSize} /></a>
                <a href=""><FaInstagramSquare size={iconSize} /></a>
                <a href=""><FaLinkedin size={iconSize} /></a>
                <a href=""><FaSquareThreads size={iconSize} /></a>
            </div>
            <div>
                Tails Azimuth • © 2024 • Next.js Starter Blog
            </div>
            <div>
                Blabla blog
            </div>
        </footer>
    );
}