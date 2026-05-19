/* eslint-disable no-unused-vars */
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
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
            <Gallery />
            <Contact />
            <Footer />
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
            <Gallery />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/About" element={<><About /><Footer /></>} />
        <Route path="/AcademicHistory" element={<><AcademicHistory /><Footer /></>} />
        <Route path="/Principal" element={<><PrincipalPage /><Footer /></>} />
        <Route path="/Achievements" element={<><Achievements /><Footer /></>} />
        <Route path="/Departments" element={<><Departments /><Footer /></>} />
        <Route path="/Sports" element={<><Sports /><Footer /></>} />
        <Route path="/Clubs" element={<><Clubs /><Footer /></>} />
        <Route path="/Facilities" element={<><Facilities /><Footer /></>} />
        <Route path="/Gallery" element={<><Gallery /><Footer /></>} />
        <Route path="/Contact" element={<><Contact /><Footer /></>} />
      </Routes>
    </div>
  );
}

export default App;