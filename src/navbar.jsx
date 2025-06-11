import { useState } from 'react';
import ReactLogo from "./assets/react.svg";


function Nav() {
  const [count, setCount] = useState(0)

  return (
    <nav className="bg-yellow-100 w-full flex items-center justify-between p-4" style={{ minHeight: '100px' }}>
      <img src={ReactLogo} alt="React Logo" className="h-full" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Button</button>
    </nav>
  );
}

export default Nav
