import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'; // Import React Icons

export default function Sidebar() {
  return (
    <aside className="bg-[#141414] rounded-2xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
          {/* replace src with your avatar */}
          <img src="https://avatars.githubusercontent.com/u/000000?v=4" alt="profile" className="w-full h-full object-cover"/>
        </div>

        <h2 className="mt-4 text-2xl font-extrabold">Thanseeh</h2>
        <p className="text-gray-400 text-sm mt-1">Web developer</p>

        <div className="w-full border-t border-gray-700 my-6"></div>

        <div className="space-y-3 text-sm">
          <a href="mailto:thanseehdev@gmail.com" className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg">
            <span className="w-10 h-10 rounded-md bg-[#111] flex items-center justify-center">
              <FaEnvelope /> {/* Email Icon */}
            </span>
            <div>
              <div className="text-xs text-gray-500">EMAIL</div>
              <div className="truncate text-sm">thanseehdev@gmail.com</div>
            </div>
          </a>

          <a href="https://github.com/thanseehdev" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg">
            <span className="w-10 h-10 rounded-md bg-[#111] flex items-center justify-center">
              <FaGithub /> {/* Github Icon */}
            </span>
            <div>
              <div className="text-xs text-gray-500">GITHUB</div>
              <div className="truncate text-sm">github.com/thanseehdev</div>
            </div>
          </a>

          <a href="https://linkedin.com/in/thanseeh-7aa934305" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg">
            <span className="w-10 h-10 rounded-md bg-[#111] flex items-center justify-center">
              <FaLinkedin /> {/* LinkedIn Icon */}
            </span>
            <div>
              <div className="text-xs text-gray-500">LINKEDIN</div>
              <div className="truncate text-sm">linkedin.com/in/Thanseeh</div>
            </div>
          </a>

          <a href="https://leetcode.com/u/cardrift/" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg">
            <span className="w-10 h-10 rounded-md bg-[#111] flex items-center justify-center">
              <FaCode /> {/* Leetcode Icon */}
            </span>
            <div>
              <div className="text-xs text-gray-500">LEETCODE</div>
              <div className="truncate text-sm">leetcode.com/...</div>
            </div>
          </a>
        </div>
      </div>
    </aside>
  );
}

