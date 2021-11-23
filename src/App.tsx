import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './globalStyles.css';

//Import views
import HomePage from './views/HomePage'

//Import components
import ScheduleDemo from './components/ScheduleDemo/ScheduleDemo';
import NavBar from './components/NavBar/NavBar'

function App() {

//Set initial visibility state of ScheduleDemo component to be false.
    const [scheduleDemoVisibility, setScheduleDemoVisibility] = useState(false);

    //Callback function for toggling visibility of ScheduleDemo Component.
    const toggleVisible = () => {
      if(scheduleDemoVisibility) {
        setScheduleDemoVisibility(false);
      } else {
        setScheduleDemoVisibility(true);
      }
    }

  return (
    <div>
      <Router>
        {/* Load "Schedule Demo Forms," which are hidden by default. */}
        <ScheduleDemo 
          scheduleDemoVisibility={scheduleDemoVisibility} 
          toggleVisible={toggleVisible}
        />
        {/* Render NavBar at Top of Screen */}
        <NavBar toggleVisible={toggleVisible}/>

        {/* Render page view depending on URL */}
        <Routes>
            <Route path='/' element={<HomePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
