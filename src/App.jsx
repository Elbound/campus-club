import { useState } from 'react'
import act_1 from './assets/activity_1.png';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black mb-4">Welcome to Campus Club Finder</h1>
        <p className="text-lg text-gray-600 mb-6 max-w-prose mx-auto">
          Discover and join exciting student clubs at your university. Explore our vibrant community and get involved today!
        </p>
        <img src={act_1} alt="Campus Club Hero" className="w-full max-w-2xl mx-auto mb-6 rounded-lg" />
        <Link to="/clubs" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Explore Clubs
        </Link>
      </div>
    </div>
  );
}

export default App;
