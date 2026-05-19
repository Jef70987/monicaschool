import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AcademicHistory from './components/AcademicHistory';
import PrincipalPage from './components/PrincipalPage';
import Achievements from './components/Achievements';
import Departments from './components/Departments';
import Sports from './components/Sports';
import Clubs from './components/Clubs';
import Facilities from './components/Facilities';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <AcademicHistory />
            <PrincipalPage />
            <Achievements />
            <Departments />
            <Sports />
            <Clubs />
            <Facilities />
          </>
        } />
        <Route path="/Home" element={
          <>
            <Hero />
            <About />
            <AcademicHistory />
            <PrincipalPage />
            <Achievements />
            <Departments />
            <Sports />
            <Clubs />
            <Facilities />
          </>
        } />
        <Route path="/About" element={<About />} />
        <Route path="/AcademicHistory" element={<AcademicHistory />} />
        <Route path="/Principal" element={<PrincipalPage />} />
        <Route path="/Achievements" element={<Achievements />} />
        <Route path="/Departments" element={<Departments />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Clubs" element={<Clubs />} />
        <Route path="/Facilities" element={<Facilities />} />
      </Routes>
    </div>
  );
}

export default App;