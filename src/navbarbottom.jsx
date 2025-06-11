import { useState } from 'react';
import ReactLogo from "./assets/react.svg";


function Footer() {
  const [count, setCount] = useState(0)

  return (
    <nav className="bg-blue-900 w-full flex items-center justify-between p-4" style={{ minHeight: '100px' }}>
      check our socials
    </nav>
  );
}

export default Footer