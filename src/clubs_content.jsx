import { useEffect, useState } from 'react';
import { clubs as rawClubs } from './club_data.js';
import { Link } from 'react-router-dom';

function ClubsContent() {
  const [sortedClubs, setSortedClubs] = useState([]);
  const [isAscending, setIsAscending] = useState(true);
  const [viewStyle, setViewStyle] = useState('card');

  useEffect(() => {
    const sorted = [...rawClubs].sort((a, b) => 
      isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setSortedClubs(sorted);
  }, [isAscending]);

  const toggleSortOrder = () => {
    setIsAscending(!isAscending);
  };

  const toggleViewStyle = () => {
    setViewStyle(viewStyle === 'card' ? 'list' : 'card');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-black text-center mb-8">Our Clubs</h1>
      <div className="flex justify-between mb-4">
        <button
          onClick={toggleSortOrder}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Sort: {isAscending ? 'A-Z' : 'Z-A'}
        </button>
        <button
          onClick={toggleViewStyle}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Switch to {viewStyle === 'card' ? 'List' : 'Card'} View
        </button>
      </div>
      <ul className={`space-y-4 ${viewStyle === 'list' ? 'list-style' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}`}>
        {sortedClubs.map((club) => (
          <li
            key={club.id}
            className={`bg-white p-4 rounded-lg shadow-md ${viewStyle === 'list' ? 'flex justify-between items-center' : ''}`}
          >
            <div>
              <h2 className="text-xl font-semibold">{club.name}</h2>
              <p className="text-gray-600 mt-2">{club.shortDescription}</p>
            </div>
            <Link to={`/clubs/${club.id}`} className="ml-4 bg-cyan-500 text-white px-2 py-1 rounded hover:bg-cyan-600">
              See Detail
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClubsContent;