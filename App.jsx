// Main entry: App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Details from './pages/Details';

export default function App() {
  return (
    <Router>
      <div className="p-4 max-w-3xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/wedding/:id" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}
