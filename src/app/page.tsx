'use client'
import { useState, useEffect, useRef } from "react"

import { Typography, Box, Avatar, Badge, Button } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import Link from 'next/link';

//Context
import { useScroll } from "@/context/SectionContext";

// Components
import ProjectCards from "@/components/ProjectCards";

export default function Home() {

  const [sendingMessage, setSendingMessage] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const { aboutRef, projectsRef, contactRef, scrollToSection } = useScroll();

  const skills: string[] = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Material UI",
    "Git",
    "GitHub",
    "Responsive Design",
    "RESTful APIs",
    "Node.js",
    "Express.js",
  ]

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., sending an email
    setSendingMessage(true);
    // Simulate a network request
    setTimeout(() => {
      setSendingMessage(false);
      alert("Message sent!");
    }, 2000);
  };
  return (
    <main className="pt-20 container mx-auto max-w-[1200px] flex flex-col items-center gap-5">
      {/* ABOUT */}
      <section ref={aboutRef}>
        <Box className="flex items-center justify-between text-left p-6 gap-3">
          <Box className="space-y-3">
            <Badge className="inline-block mb-4 bg-white text-[#0A192F] text-[14px] rounded-2xl px-2 font-black">Frontend Developer</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Welcome to My Portfolio
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              I am a passionate Frontend Developer with a love for creating beautiful and functional web
              applications.
            </p>
            <Box className="flex gap-4">
              <Button onClick={() => scrollToSection(projectsRef)} variant="contained" sx={{transform: 'none', backgroundColor: 'white',  border: '1px solid #fff', color: '#0A192F', '&:hover': { backgroundColor: '#0A192F', color: '#fff', cursor: 'pointer'} }} endIcon={<ChevronRight></ChevronRight>}>My Projects</Button>
              <Button onClick ={() => scrollToSection(contactRef)} variant="outlined" sx={{transform: 'none', color: '#fff', borderColor: '#fff' }}>Contact Me</Button>
            </Box>
          </Box>
          <Link href="https://github.com/GustavoRocha3" target="_blank" rel="noopener noreferrer">
            <Avatar
              sx={{ width: 350, height: 350 }}
              className="inline-block rounded-full ring-2 ring-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
              src="/profile-image.png"
              alt="Gustavo Rocha"
            />
          </Link>
        </Box>
        <Box className="flex items-center gap-6 justify-center flex-col p-6 overflow-hidden">
          <Typography variant="h4" className="text-4xl font-bold text-center mt-10">
            About Me
          </Typography>
          <Box className="flex justify-between gap-10 w-full">
            <Box className="">
              <Typography variant="h5" className="text-black pb-4 text-2xl font-black dark:text-white">
                My Journey
              </Typography>
              <Typography className="text-base max-w-xl text-gray-500 md:text-xl dark:text-gray-400">
                Hello! I'm <strong>Gustavo</strong>, and I started my journey as a <strong>Frontend Developer</strong> in 2022 at Sinergytech, where I had the opportunity to improve the skills I had learned at Digital House.
                <br />
                Right now I'm working in a project that uses Next.js, Typescript and some libs like Material UI
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" className="text-black pb-4 text-2xl font-black dark:text-white">
                My Skills
              </Typography>
              <Box className="text-base max-w-xl text-gray-500 md:text-xl dark:text-gray-400 space-x-1.5">
                {skills.map((skill,index) => {
                  return( 
                    <Badge key={index} className="inline-block mb-2 bg-[#c8c8c8] text-[#0A192F] text-[14px] rounded-2xl px-2 font-bold cursor-default transition-shadow hover:shadow-[0_0_10px_4px_rgba(30,58,138,0.8)] hover:bg-white">{skill}</Badge>
                  )
                })}
              </Box>
            </Box>            
          </Box>
        </Box>
      </section>
      {/* PROJECTS */}
      <section ref={projectsRef} className="flex flex-col items-center gap-5">
        <Typography variant="h4" className="text-4xl font-bold text-center mt-10">
          Projects
        </Typography>
        <Typography className="text-base w-full text-gray-500 md:text-xl dark:text-gray-400 text-center mb-10">
          Here are some of the projects I've worked on. Click on the button bellow to view the code on GitHub.
        </Typography>
        <ProjectCards />
      </section>
      {/* CONTACT */}
      <section className="flex flex-col items-center gap-5" ref={contactRef}>
        <Typography variant="h4" className="text-4xl font-bold text-center mt-10">
          Contact Me
        </Typography>
        <Typography className="text-base w-full text-gray-500 md:text-xl dark:text-gray-400 text-center mb-10">
          If you would like to get in touch, feel free to reach out via email or connect with me on LinkedIn.
        </Typography>
        <Box className="flex flex-col items-center gap-4 w-full">
          <form onSubmit={sendEmail} className="flex flex-col gap-4 w-full">
              <input onChange={(e) => setContactName(e.target.value)} type="text" name="name" placeholder="Your Name*" required className="p-2 border rounded" />
              <input onChange={(e) => setContactEmail(e.target.value)} type="email" name="email" placeholder="Your Email*" required className="p-2 border rounded" />
              <textarea onChange={(e) => setContactMessage(e.target.value)} name="message" placeholder="Your Message*" required className="p-2 border rounded h-32" />
              <Button loading={sendingMessage} loadingPosition="end" onClick={() => sendEmail} variant="contained" type="submit" sx={{transform: 'none', backgroundColor: 'white',  border: '1px solid #fff', color: '#0A192F', '&:hover': { backgroundColor: '#0A192F', color: '#fff', cursor: 'pointer'} }}>
                  Send Message
              </Button>
          </form>
        </Box>
      </section>
      
    </main>
  );
}
