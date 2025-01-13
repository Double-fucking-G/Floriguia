import * as React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Home from './pages/Home.jsx';

export default function App() {
  const [view, setView] = useState('header');

  const showHeader = () => setView('header');
  const showSidebar = () => setView('sidebar');

  useEffect(() => {
    //verify if the user is on a mobile device or not
    function isMobile() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      return /android|iphone|ipad|ipod|blackberry|windows phone|opera mini|iemobile/i.test(userAgent);
    }

    //if the user is on a mobile device it shows a sidebar instead of the normal header, runs every 500ms
    setInterval(() => {
      if (isMobile()) {
        showSidebar();
      } else {
        showHeader();
      }
}, 500);
  });

  return (
    <div className="App">
      {view === 'header' && <Header />}
      {view === 'sidebar' && <Sidebar />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}