import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './navbar.jsx'

import About from './about_content.jsx'
// import Clubs from './clubs_content.jsx'
import ClubsDetail from './clubs_detail.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="min-h-screen flex flex-col">
      <Nav />
      {/* <About /> */}
      {/* <Clubs /> */}
      <ClubsDetail />
    </div>
  </StrictMode>,
)
