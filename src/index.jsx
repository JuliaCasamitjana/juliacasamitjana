import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/styles.scss';
import Home from './components/Home.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import LanguageSkills from './components/LanguageSkills.jsx';
import ComputerSkills from './components/ComputerSkills.jsx';
import Portfolio from './components/Portfolio.jsx';
import Header from './components/Header.jsx';
import NotFound from './components/NotFound.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/*" element={<Portfolio />} />
          <Route path="/education/*" element={<Education />} />
          <Route path="/experience/*" element={<Experience />} />
          <Route path="/languageskills/*" element={<LanguageSkills />} />
          <Route path="/computerskills/*" element={<ComputerSkills />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);