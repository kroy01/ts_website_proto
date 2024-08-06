import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import './App.css';
import NavBar from './Components/Navbar';
import AboutUs from './Components/About-Us/AboutUs';
import Projects from './Components/Projects/Projects';
import Events from './Components/Events/Events';
import Timeline from './Components/Timeline/Timeline';
import Sponsors from './Components/Sponsors/Sponsors';
// import ToggleCircle from './Components/Resources/ToggleCirc';
import backgroundlight from "./Components/Resources/background_light.png";
import backgrounddark from "./Components/Resources/background_dark.png";
// import { useEffect } from 'react';

import './Components/Fonts/Aquire-BW0ox.otf';
import './Components/Fonts/xspace-xspace-400.ttf';

function App() {
  const darkmode = true;
  // const [darkmode, setDarkmode] = useState(false);

  // DARK/LIGHT TOGGLE
  // useEffect(() => {
  //   const currentlydarkmode = sessionStorage.getItem("Mode");
  //   if (currentlydarkmode === "Dark") {
  //     setDarkmode(true);
  //   }
  //   else {
  //     setDarkmode(false);
  //   }
  // }, []);

  // const toggleMode = () => {
  //   if (darkmode) {
  //     sessionStorage.setItem("Mode", "Light");
  //     setDarkmode(false);
  //   }
  //   else {
  //     sessionStorage.setItem("Mode", "Dark");
  //     setDarkmode(true);
  //   }
  // };

  // const ToggleButton = (
  //   <>
  //     {/* <div style={{ backgroundColor: 'white', padding: '1vw', margin: '0' }}> */}
  //     <button style={{ backgroundColor: 'black', borderWidth: '0.2vw', borderColor: 'white', borderStyle: 'solid', borderBottomColor: 'white', borderRightColor: 'white', borderRadius: '1.5vw', marginRight: '0.75vw', marginTop: '1.75vh', width: '5.75vw', height: '2.25vw' }} onClick={toggleMode}>
  //       <div className={darkmode ? 'toggleButtontrue' : 'toggleButtonfalse'}>
  //         <ToggleCircle />
  //       </div>
  //     </button>
  //     {/* </div> */}
  //   </>
  // );
  // DARK/LIGHT TOGGLE

  return (
    // <>
      <div className='mainpg' style={{ backgroundImage: `url(${darkmode ? backgrounddark : backgroundlight})` }}>
        <Router>
          <NavBar />          {/* Toggle Button prop here */}
          <Routes>
            <Route path='/' element={<Home color={darkmode ? "white" : "#252525"} />} />
            <Route path='/about-us' element={<AboutUs color={darkmode ? "white" : "#252525"} />} />
            <Route path='/projects' element={<Projects color={darkmode ? "white" : "#252525"} />} />
            <Route path='/events' element={<Events color={darkmode ? "white" : "#252525"} />} />
            <Route path='/timeline' element={<Timeline darkmode={darkmode} />} />
            <Route path='/sponsors' element={<Sponsors color={darkmode ? "white" : "#252525"} />} />
          </Routes>
        </Router>
      </div>
    // </>
  );
}

export default App;