'use client'
import { Typewriter } from "react-simple-typewriter"
import { useScroll } from "@/context/SectionContext";
export default function Header() {
    const { aboutRef, projectsRef, contactRef, scrollToSection } = useScroll();
    return (
        <header className="bg-[#112240] text-[#CCD6F6] p-4 fixed w-full z-10 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    <Typewriter
                        words={['Gustavo de Alencar', 'Frontend Developer!']}
                        loop={true}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#about" onClick={() => scrollToSection(aboutRef)} className="hover:underline">About</a></li>
                        <li><a href="#projects" onClick={() => scrollToSection(projectsRef)} className="hover:underline">Projects</a></li>
                        <li><a href="#contact" onClick={() => scrollToSection(contactRef)} className="hover:underline">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}