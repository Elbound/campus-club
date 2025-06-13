import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.jsx';
import AboutContent from './about_content.jsx';
import ClubsContent from './clubs_content.jsx';
import ClubDetail from './clubs_detail.jsx';
import Navbar from './navbar.jsx';
import './index.css';
import NotFound from './not_found.jsx'; 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutContent />} />
        <Route path="/clubs" element={<ClubsContent />} />
        <Route path="/clubs/:clubId" element={<ClubDetail />} />
        <Route path="*" element={<NotFound />} /> {/* 404 Not Found route */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);