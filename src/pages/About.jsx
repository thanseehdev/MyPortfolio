import React from 'react'; // Import React
import SkillBadge from "../components/Skills";
import { motion } from "framer-motion";
export default function About() {
    const skills = [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JavaScript",
        "HTML/CSS",
        "Git",
        "GitHub",
        "REST API",
        "TypeScript",
        "PostgreSQL",
        "Docker"
    ];

    return (
        <div className="bg-[#111] rounded-b-2xl p-8">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                    <h3 className="text-gray-400">Hello,</h3>
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
                        I'm{" "}
                        <motion.span
                            className="text-yellow-400 inline-block"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            Thanseeh
                        </motion.span>
                    </h1>

                    <p className="text-gray-300 mt-2 font-semibold">Web Developer</p>

                    <button className="mt-6 bg-gray-700 hover:bg-gray-600 px-5 py-2 rounded-full">
                        Download CV
                    </button>

                    <div className="mt-8">
                        <h2 className="text-2xl font-bold">About Me</h2>
                        <div className="w-14 h-1 bg-yellow-400 rounded mt-2 mb-4"></div>
                        <p className="text-gray-300 leading-relaxed">
                            I'm a self-taught MERN stack developer who builds simple and efficient web apps.
                            I use JavaScript, React, Node.js, and MongoDB to create reliable solutions.
                            I enjoy learning new things and improving my skills.
                            I love turning ideas into real, useful digital experiences.
                        </p>
                        
                    </div>

                    <div className="mt-8">
                        <h3 className="text-2xl font-bold">Skills</h3>
                        <div className="flex flex-wrap gap-3 mt-4">
                            {skills.map((s) => (
                                <SkillBadge key={s} label={s} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-72 flex items-center justify-center">
                    <img
                        src="/Gemini_Generated_Image_u579h2u579h2u579.png"
                        alt="robot"
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
