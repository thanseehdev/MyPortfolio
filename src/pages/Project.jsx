import React from "react";

const mainProjects = [
  {
    title: "LittleHope - Kids Fashion",
    description: "ReactJS, ExpressJS, Tailwind, NodeJS, MongoDB",
    image: "/Screenshot (147).png",
    link: "https://littlehope.online",
  },
  {
    title: "Thanaf Watches",
    description: "EJS, ExpressJS, NodeJS, MongoDB, Bootstrap",
    image: "/Screenshot (145).png",
    link: "https://github.com/thanseehdev/ThanafWatches-ecommerce",
  },
  {
    title: "",
    description: "",
    image: "",
    link: "#",
  },
];

const miniProjects = [
  {
    title: "Netflix Clone",
    description: "ReactJS, ExpressJS, NodeJS, Firebase",
    image: "/Screenshot (146).png",
    link: "#",
  },
  {
    title: "Crypto Price Tracker",
    description: "EJS, CoinGecko API, NodeJS",
    image: "/Screenshot (251).png",
    link: "https://cryptoliveprice.onrender.com",
  },
  {
    title: "CasioF91W",
    description: "ReactJS, TailwindCSS",
    image: "/Screenshot (248).png",
    link: "https://casiof91w.vercel.app",
  },
];

export default function Projects() {
  return (
    <div className="bg-[#111] min-h-screen rounded-b-2xl p-8">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {mainProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-md hover:shadow-lg transform transition duration-300"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transform transition duration-500 ease-in-out hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-white">{project.title}</h2>
              <p className="text-gray-400 text-sm mt-1">{project.description}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Mini Projects Section */}
      <h2 className="text-2xl font-semibold mb-6 text-yellow-400">Mini Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {miniProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-md hover:shadow-lg transform transition duration-300"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover transform transition duration-500 ease-in-out hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h2 className="text-base font-semibold text-white">{project.title}</h2>
              <p className="text-gray-400 text-sm mt-1">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}



