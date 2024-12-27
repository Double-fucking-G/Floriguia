import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css"

import Home from './pages/Home.jsx';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}