import { Badge, Box, Typography } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCards() {

    interface Project {
        title: string;
        description: string;
        stack: string[];
        image: string;
        link: string;
    }

    const projects: Project[] = [
        {
            title: "Pokedex",
            description: "A web application that uses the PokeAPI to show information about Pokémons.",
            stack: ["React", "API"],
            image: "/projects/pokemon-react.png",
            link: "https://github.com/GustavoRocha3/React-first-steps"
        },
        {
            title: "Websocket Chat Node.js",
            description: "A real-time chat application built with Node.js and Socket.IO, allowing users to communicate in real-time.",
            stack: ["Node.js", "websocket", "HTML", "CSS"],
            image: "/projects/websocket-chat-nodejs.png",
            link: "https://github.com/GustavoRocha3/Chat-Socket-Io-NodeJS"
        }
    ]

    return (
        <Box className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[900px]">
            {projects.map((project, index) => (
                <Box key={index} className="flex flex-col justify-between items-center gap-2 border rounded-lg p-4 bg-[#112240] text-[#CCD6F6] hover:shadow-lg transition-shadow duration-300">
                    <Image width={400} height={150} src={project.image} alt={project.title} className="rounded-t-lg mb-4" />
                    <Typography variant="h6" className="text-xl font-semibold mb-2">{project.title}</Typography>
                    <Typography className="mb-2 text-center">{project.description}</Typography>
                    <Box className="flex flex-wrap gap-2 mb-4">
                        {project.stack.map((tech, index) => (
                            <Badge key={index} className="inline-block mb-2 bg-[#c8c8c8] text-[#0A192F] text-[12px] rounded-2xl px-2 font-bold cursor-default transition-shadow hover:shadow-[0_0_10px_4px_rgba(30,58,138,0.8)] hover:bg-white">
                                {tech}
                            </Badge>
                        ))}
                    </Box>
                    <Link className="flex items-center justify-around w-25 rounded border border-white px-1 py-2 hover:bg-white hover:text-[#0a1930] transition-shadow hover:shadow-[0_0_10px_4px_rgba(30,58,138,0.8)]" href={project.link} target="_blank" rel="noopener noreferrer">View on <GitHub/></Link>
                </Box>
            ))}
        </Box>
    )
}