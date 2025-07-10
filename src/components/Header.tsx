'use client';
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useScroll } from "@/context/SectionContext";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

export default function Header() {
  const { aboutRef, projectsRef, contactRef, scrollToSection } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollAndClose = (ref: React.RefObject<HTMLDivElement | null>) => {
    scrollToSection(ref);
    setMenuOpen(false);
  };

  return (
    <header className="bg-[#112240] text-[#CCD6F6] p-4 fixed w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Typewriter
            words={['Gustavo de Alencar', 'Frontend Developer!']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>

        {/* Menu normal (desktop) */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a onClick={() => scrollToSection(aboutRef)} className="hover:underline cursor-pointer">About</a></li>
            <li><a onClick={() => scrollToSection(projectsRef)} className="hover:underline cursor-pointer">Projects</a></li>
            <li><a onClick={() => scrollToSection(contactRef)} className="hover:underline cursor-pointer">Contact</a></li>
          </ul>
        </nav>

        {/* Ícone Hamburguer (mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-[#0a192f] px-4 py-4 shadow-md">
          <ul className="flex flex-col space-y-3 text-lg">
            <li><a onClick={() => handleScrollAndClose(aboutRef)} className="hover:underline cursor-pointer">About</a></li>
            <li><a onClick={() => handleScrollAndClose(projectsRef)} className="hover:underline cursor-pointer">Projects</a></li>
            <li><a onClick={() => handleScrollAndClose(contactRef)} className="hover:underline cursor-pointer">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
