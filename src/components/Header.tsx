'use client';
import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useScroll } from "@/context/SectionContext";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const { aboutRef, projectsRef, contactRef, scrollToSection } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const handleNavigateToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (pathname !== '/') {
      // Salva o ID da seção e volta para a home
      sessionStorage.setItem("scrollTo", ref.current?.id ?? "");
      router.push('/');
    } else {
      scrollToSection(ref);
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const sectionId = sessionStorage.getItem("scrollTo");
    if (sectionId && pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      sessionStorage.removeItem("scrollTo");
    }
  }, [pathname]);

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

        {/* Desktop menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <button onClick={() => handleNavigateToSection(aboutRef)} className="hover:underline cursor-pointer bg-transparent border-none text-inherit">
                About
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigateToSection(projectsRef)} className="hover:underline cursor-pointer bg-transparent border-none text-inherit">
                Projects
              </button>
            </li>
            {/* <li>
              <Link href="/features" className="hover:underline cursor-pointer">
                Features
              </Link>
            </li> */}
            <li>
              <button onClick={() => handleNavigateToSection(contactRef)} className="hover:underline cursor-pointer bg-transparent border-none text-inherit">
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-[#0a192f] px-4 py-4 shadow-md">
          <ul className="flex flex-col space-y-3 text-lg">
            <li>
              <button onClick={() => handleNavigateToSection(aboutRef)} className="hover:underline cursor-pointer bg-transparent border-none text-inherit">
                About
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigateToSection(projectsRef)} className="hover:underline cursor-pointer bg-transparent border-none text-inherit">
                Projects
              </button>
            </li>
            {/* <li>
              <Link href="/features" className="hover:underline cursor-pointer" onClick={() => setMenuOpen(false)}>
                Features
              </Link>
            </li> */}
            <li>
              <button onClick={() => handleNavigateToSection(contactRef)} className="hover:underline cursor-pointer bg-transparent border-none text-inherit">
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
