import React from 'react'; // Import React

export default function Contact() {
  return (
    <div className="bg-[#111] rounded-b-2xl p-8">
      <h1 className="text-3xl font-bold mb-4 text-yellow-400">Contact</h1>
      <p className="text-gray-300">
        Get in touch via email:{" "}
        <a href="mailto:nahyanmp4@gmail.com" className="text-yellow-400">
          thanseehdev@gmail.com
        </a>
      </p>
    </div>
  );
}
