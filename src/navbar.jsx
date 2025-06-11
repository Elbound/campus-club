import { useState } from 'react';
import ReactLogo from "./assets/react.svg";


function Nav() {
  const [count, setCount] = useState(0)

  return (
    <nav className="bg-gray-900 w-full flex items-center justify-between p-4" style={{ minHeight: '100px' }}>
      <img src={ReactLogo} alt="React Logo" className="h-full" />
      <div className="flex space-x-4">
        <a href="#" className="text-white hover:text-gray-700">home</a>
        <a href="#" className="text-white hover:text-gray-700">clubs</a>
        <a href="#" className="text-white hover:text-gray-700">about</a>
      </div>
    </nav>
  );
}

export default Nav
