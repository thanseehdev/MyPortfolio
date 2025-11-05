import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Projects from './pages/Project';
import Contact from './pages/Contact';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen text-white flex flex-col md:flex-row gap-6 md:gap-8 p-4 md:p-12 bg-[#111]">
      
      {/* Left Sidebar (on mobile it goes on top) */}
      <div className="w-full md:w-1/4 flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <NavBar />
        <div className="mt-4 md:mt-6 flex-1">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

