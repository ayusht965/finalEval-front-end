import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import LogInPage from './pages/LogInPage';
import Header from './components/Header';
import ContentEntries from './pages/ContentEntries';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/content-entries/:contentId?" element={<ContentEntries />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
