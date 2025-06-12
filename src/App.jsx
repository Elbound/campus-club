import { useState } from 'react'
import act_1 from './assets/activity_1.png';
import act_2 from './assets/activity_2.png';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="flex items-center p-0 md:p-0 bg-black justify-between h-full">
        <div className="flex-1 px-6 text-center">
          <p className="text-white text-4xl font-bold">Join Clubs</p>
          <p className="text-white text-lg mt-4">Discover a vibrant community on campus! Join one of our diverse clubs to connect with peers, explore new interests, and enhance your university experience.</p>
          <button className="mt-4 bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600">Join Clubs</button>
        </div>
        <img src={act_1} alt="activity image 1" className="h-auto object-cover" />
      </div>

      <div className="flex items-center p-0 md:p-0 bg-gray-400 justify-between h-full">
        <img src={act_2} alt="activity image 2" className="h-auto object-cover" />
        <div className="flex-1 px-6 text-center">
          <p className="text-4xl font-bold">Get Involved</p>
          <p className="text-lg mt-4">Step into the heart of campus life! Join a club to meet new friends, develop skills, and make unforgettable memories during your time here.</p>
        </div>
      </div>

      <div className="p-0 md:p-0 bg-black" style={{ minHeight: '300px' }}>
        <br />
        <p className="text-white text-4xl font-bold text-center  mb-20">Why Join Clubs</p>
        <div className="flex justify-around px-4" style={{ minHeight: '200px' }}>
          <div className="bg-gray-800 text-white p-2 rounded-lg w-1/4 text-center" style={{ minHeight: '150px' }}>
            <p className="text-lg font-semibold">Socializing</p>
            <p className="text-sm mt-10">Build lasting friendships and expand your network by connecting with like-minded students from various disciplines across campus.</p>
          </div>
          <div className="bg-gray-800 text-white p-2 rounded-lg w-1/4 text-center" style={{ minHeight: '150px' }}>
            <p className="text-lg font-semibold">Gaining Experience</p>
            <p className="text-sm mt-10">Develop valuable leadership and teamwork skills through hands-on activities and real-world projects offered by your chosen club.</p>
          </div>
          <div className="bg-gray-800 text-white p-2 rounded-lg w-1/4 text-center" style={{ minHeight: '150px' }}>
            <p className="text-lg font-semibold">Earning Student Activity Points</p>
            <p className="text-sm mt-10">Boost your resume and unlock exclusive rewards by actively participating in club events and accumulating valuable student activity points.</p>
          </div>
        </div>
        <br />
        <br />
      </div>

    </div>
  );
}

export default App
