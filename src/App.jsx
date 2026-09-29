import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Careers from './components/Careers';
import JobDetail from './components/JobDetail';
import Partner from './components/Partner';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-bg font-sans overflow-x-hidden selection:bg-brand-gold selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:slug" element={<JobDetail />} />
          <Route path="/partner" element={<Partner />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
