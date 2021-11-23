import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './globalStyles.css';

//Import views
import HomePage from './views/HomePage'

//Import components
import ScheduleDemo from './components/ScheduleDemo/ScheduleDemo';
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div>
      <Router>
        {/* Load "Schedule Demo Forms," which are hidden by default. */}
        <ScheduleDemo />
        {/* Render NavBar at Top of Screen */}
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
