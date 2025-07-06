'use client';
import React, { useContext, createContext, useRef } from "react";

interface ScrollContextProps {
    aboutRef: React.RefObject<HTMLDivElement | null>;
    projectsRef: React.RefObject<HTMLDivElement | null>;
    contactRef: React.RefObject<HTMLDivElement | null>;
    scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
}

const ScrollContext = createContext<ScrollContextProps | null>(null);

export const ScrollProvider = ({ children } : { children: React.ReactNode }) => {
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
        ref.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <ScrollContext.Provider value={{ aboutRef, projectsRef, contactRef, scrollToSection }}>
            {children}
        </ScrollContext.Provider>
    );
}

export const useScroll = () => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error("useScroll must be used within a ScrollProvider");
    }
    return context;
}
