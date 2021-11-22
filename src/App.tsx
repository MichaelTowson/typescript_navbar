import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';

//Import views
import HomePage from './views/HomePage'

//Import components
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div>
      {/* Render NavBar at Top of Screen */}
      <Router>
        <NavBar />

        {/* Render page view depending on URL */}
        <Routes>
            <Route path='/' element={<HomePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
