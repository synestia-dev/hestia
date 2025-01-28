import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-4 xl:px-0 xl:max-w-[1232px] mx-auto py-14">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-0">
        <div>
          <Link
            href="/"
            className="text-5xl uppercase font-playfairDisplay leading-normal"
          >
            <Image src="./logo.svg" alt="Logo" width={234} height={120} />
          </Link>
          <div className="flex items-center gap-4 mt-4">
            <Link
              href="/"
              target="_blank"
              className="flex items-center justify-center gap-2 size-10 bg-dun rounded-full text-white"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M2.148 11.81q7.87-3.429 10.497-4.522c4.999-2.079 6.037-2.44 6.714-2.452c.15-.003.482.034.698.21c.182.147.232.347.256.487s.054.459.03.708c-.27 2.847-1.443 9.754-2.04 12.942c-.252 1.348-.748 1.8-1.23 1.845c-1.045.096-1.838-.69-2.85-1.354c-1.585-1.039-2.48-1.686-4.018-2.699c-1.777-1.171-.625-1.815.388-2.867c.265-.275 4.87-4.464 4.96-4.844c.01-.048.021-.225-.084-.318c-.105-.094-.26-.062-.373-.036q-.239.054-7.592 5.018q-1.079.74-1.952.721c-.643-.014-1.88-.363-2.798-.662c-1.128-.367-2.024-.56-1.946-1.183q.061-.486 1.34-.994"
                />
              </svg>
            </Link>
            <Link
              href="/"
              target="_blank"
              className="flex items-center justify-center gap-2 size-10 bg-dun rounded-full text-white"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-[100px] lg:gap-[300px]">
          <nav className="flex flex-col gap-2 items-start">
            <a
              href="/"
              className="py-2 font-poppins text-base font-light relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-dun after:transition-all after:duration-300 hover:text-dun hover:after:w-full transition-all duration-300"
            >
              About me
            </a>
            <a
              href="/#slogan"
              className="py-2 font-poppins text-base font-light relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-dun after:transition-all after:duration-300 hover:text-dun hover:after:w-full transition-all duration-300"
            >
              My Slogan
            </a>
            <a
              href="/#experience"
              className="py-2 font-poppins text-base font-light relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-dun after:transition-all after:duration-300 hover:text-dun hover:after:w-full transition-all duration-300"
            >
              My Experience
            </a>
            <a
              href="/#faq"
              className="py-2 font-poppins text-base font-light relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-dun after:transition-all after:duration-300 hover:text-dun hover:after:w-full transition-all duration-300"
            >
              FAQ
            </a>
            <a
              href="/#contact"
              className="py-2 font-poppins text-base font-light relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-dun after:transition-all after:duration-300 hover:text-dun hover:after:w-full transition-all duration-300"
            >
              Contact me
            </a>
          </nav>
          <div className="flex flex-col gap-2 items-start">
            <p className="text-base font-poppins font-semibold">Contact me</p>
            <a
              href="mailto:info@gmail.com"
              className="py-2 font-poppins text-base font-light relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-dun after:transition-all after:duration-300 hover:text-dun hover:after:w-full transition-all duration-300"
            >
              Email: info@gmail.com
            </a>
            <a
              href="tel:555-567-8901"
              className="py-2 font-poppins text-base font-light relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-dun after:transition-all after:duration-300 hover:text-dun hover:after:w-full transition-all duration-300"
            >
              Phone: 555-567-8901
            </a>
            <a
              href="http://maps.google.com/?q=1234 Main St Moonstone City"
              target="_blank"
              className="py-2 font-poppins text-base font-light relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-dun after:transition-all after:duration-300 hover:text-dun hover:after:w-full transition-all duration-300"
            >
              Address: 1234 Main St Moonstone City
            </a>
          </div>
        </div>
      </div>
      <div className="mt-[30px] lg:mt-[50px] flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 border-t border-dun pt-6 lg:pt-10">
        <p className="text-xs sm:text-sm font-poppins font-light text-foreground">
          © 2024. All Rights Reserved.
        </p>
        <Link
          href="/privacy"
          className="text-xs sm:text-sm font-poppins font-light text-foreground underline"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
