import ReactLogo from './assets/react.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 w-full flex items-center justify-between p-4" style={{ minHeight: '100px' }}>
      <div className="flex">
        <img src={ReactLogo} alt="React Logo" className="h-full" />
        <p className="text-3xl text-white ml-3 font-medium">Campus Club</p>
      </div>
      
      <div className="flex space-x-6">
        <Link to="/" className="text-xl font-semibold text-white hover:text-gray-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition duration-300">Home</Link>
        <Link to="/clubs" className="text-xl font-semibold text-white hover:text-gray-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition duration-300">Clubs</Link>
        <Link to="/about" className="text-xl font-semibold text-white hover:text-gray-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition duration-300">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;