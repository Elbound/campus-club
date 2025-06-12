import { useState, useEffect } from 'react';
import { clubs as rawClubs } from './club_data.js';

function ClubDetail() {
  const club = rawClubs[1]; // Hardcoded to index 1 (Photography Club)
  const [isJoined, setIsJoined] = useState(false);

  useEffect(() => {
    // Check localStorage for joined status
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs')) || [];
    setIsJoined(joinedClubs.includes(club.id));
  }, [club.id]);

  const handleJoinClub = () => {
    let joinedClubs = JSON.parse(localStorage.getItem('joinedClubs')) || [];
    if (!joinedClubs.includes(club.id)) {
      joinedClubs.push(club.id);
      localStorage.setItem('joinedClubs', JSON.stringify(joinedClubs));
      setIsJoined(true);
      alert('You have joined ' + club.name + '!');
    }
  };

  const upcomingEvents = club.events.slice(0, 2); // Ensure at least 2 events

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <img src={club.image} alt={club.name} className="w-full h-64 object-cover rounded-lg mb-6" />
        <h1 className="text-4xl font-bold text-black mb-4">{club.name}</h1>
        <p className="text-lg text-black text-justify mb-6">{club.description}</p>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
          <ul className="list-disc pl-5">
            {upcomingEvents.map((event, index) => (
              <li key={index} className="text-gray-600">
                {event.name} - {event.date}
              </li>
            ))}
          </ul>
        </div>
        {!isJoined ? (
          <button
            onClick={handleJoinClub}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Join Club
          </button>
        ) : (
          <p className="text-green-600 font-semibold">You have joined this club!</p>
        )}
      </div>
    </div>
  );
}

export default ClubDetail;