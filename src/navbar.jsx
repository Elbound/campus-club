import { useState } from 'react';
import ReactLogo from "./assets/react.svg";


function Nav() {
  const [count, setCount] = useState(0)

  return (
    <nav className="bg-gray-900 w-full flex items-center justify-between p-4" style={{ minHeight: '100px' }}>
      <div className="flex">
        <img src={ReactLogo} alt="React Logo" className="h-full" />
        <p className="text-3xl font-mono text-white ml-5"> Campus Club</p>
      </div>
      
      <div className="flex space-x-4">
        <a href="#" className="text-xl font-semibold text-white hover:text-gray-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition duration-300">Home</a>
        <a href="#" className="text-xl font-semibold text-white hover:text-gray-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition duration-300">Clubs</a>
        <a href="#" className="text-xl font-semibold text-white hover:text-gray-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition duration-300">About</a>
      </div>
    </nav>
  );
}

export default Nav
