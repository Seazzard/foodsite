import React from 'react';
import Home from './components/Home/Home';
import './style.css';
import Administrator from './components/Admin/Administrator';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<Administrator />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
