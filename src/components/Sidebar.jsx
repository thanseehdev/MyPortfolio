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

       <div className="space-y-3 w-full text-sm">
        {/* Contact Links */}
        {[
          { icon: <FaEnvelope />, label: "EMAIL", value: "thanseehdev@gmail.com", href: "mailto:thanseehdev@gmail.com" },
          { icon: <FaGithub />, label: "GITHUB", value: "github.com/thanseehdev", href: "https://github.com/thanseehdev" },
          { icon: <FaLinkedin />, label: "LINKEDIN", value: "linkedin.com/in/Thanseeh", href: "https://linkedin.com/in/thanseeh-7aa934305" },
          { icon: <FaCode />, label: "LEETCODE", value: "leetcode.com/...", href: "https://leetcode.com/u/cardrift/" }
        ].map((item, i) => (
          <a key={i} href={item.href} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
            <span className="w-10 h-10 rounded-md bg-[#111] flex items-center justify-center">{item.icon}</span>
            <div className="truncate">
              <div className="text-xs text-gray-500">{item.label}</div>
              <div className="text-sm truncate">{item.value}</div>
            </div>
          </a>
        ))}
      </div>
      </div>
    </aside>
  );
}

