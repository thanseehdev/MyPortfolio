import React from 'react'; // Import React
import './App.css'
import { Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar'
import About from './pages/About'
import Projects from './pages/Project';
import Contact from './pages/Contact';
import NavBar from './components/Navbar';

function App() {
  

  return (
    <div className="min-h-screen text-white flex gap-8 p-6 md:p-12">
      {/* Left Sidebar (card) */}
      <div className="w-full md:w-1/4">
       <Sidebar/>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <NavBar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
