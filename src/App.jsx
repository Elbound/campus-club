import { useState } from 'react'
import act_1 from './assets/activity_1.png';
import act_2 from './assets/activity_2.png';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* First Section: Text Left, Image Right */}
      <div className="flex items-center justify-between p-6 md:p-12 bg-gray-700">
        <p className="text-4xl font-bold text-center flex-1">Text here</p>
        <img src={act_1} alt="activity image 1" className="h-auto max-h-96 object-cover ml-6" />
      </div>

      {/* Second Section: Image Left, Text Right */}
      <div className="flex items-center justify-between p-6 md:p-12 bg-gray-500">
        <img src={act_2} alt="activity image 2" className="h-auto max-h-96 object-cover mr-6" />
        <p className="text-4xl font-bold text-center flex-1">Text here</p>
      </div>
    </div>
  );
}

export default App
