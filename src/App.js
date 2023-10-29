import AOS from 'aos'
import 'aos/dist/aos.css'

import SecondPage from "./components/SECONDPAGE/SecondPage";
import { useEffect } from 'react';
import Heropart from './components/HEROPART/HeroPart';
import ThirdPage from './components/THIRDPAGE/ThirdPage';
import FourthPage from './components/FOURTHPAGE/FourthPage';
import FooterPage from './components/FOOTERPAGE/FooterPage';


function App() {
  useEffect(()=>{
    AOS.init({duration:3000})
  })
  return (
    <div className="App">
  <Heropart/>
  <SecondPage/>
  <h1 className='SrlPg_heading'> Our Sphere of Expertise</h1> 
  <ThirdPage/>
  <FourthPage/>
  <FooterPage/>
    </div>
  );
}

export default App;
