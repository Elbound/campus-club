import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './navbar.jsx'
import Footer from './navbarbottom.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="min-h-screen flex flex-col">
      <Nav />
      <App />
      <Footer />
    </div>
  </StrictMode>,
)
