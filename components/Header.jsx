import Button from "./Button";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="px-4 xl:px-0 xl:max-w-[1232px] mx-auto flex justify-between items-center py-4">
            <Link href="/" className="text-5xl uppercase font-playfairDisplay leading-normal">
                <Image src='./logo.svg' alt="Logo" width={134} height={72}/>
            </Link>
            <nav className="items-center gap-12 hidden lg:flex">
                <Link href="/" className="py-2 font-poppins text-base font-light relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-dun after:transition-all after:duration-300 hover:text-dun hover:after:w-full transition-all duration-300">About me</Link>
                {/* <a href="/#slogan" className="py-2 font-poppins text-base font-light relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-dun after:transition-all after:duration-300 hover:text-dun hover:after:w-full transition-all duration-300">My Slogan</a> */}
                <a href="/#experience" className="py-2 font-poppins text-base font-light relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-dun after:transition-all after:duration-300 hover:text-dun hover:after:w-full transition-all duration-300">My Experience</a>
                <a href="/#howcanihelp" className="py-2 font-poppins text-base font-light relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-dun after:transition-all after:duration-300 hover:text-dun hover:after:w-full transition-all duration-300">How I Can Help</a>
                <a href="/#faq" className="py-2 font-poppins text-base font-light relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-dun after:transition-all after:duration-300 hover:text-dun hover:after:w-full transition-all duration-300">FAQ</a>
                <a href="/#contact" className="py-2 font-poppins text-base font-light relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-dun after:transition-all after:duration-300 hover:text-dun hover:after:w-full transition-all duration-300">Contact me</a>
            </nav>
            <Button href="/#contact">Book a call</Button>
        </header>
    );
}
