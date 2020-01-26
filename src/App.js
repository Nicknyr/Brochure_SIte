import React from 'react';
import './App.css';
import { Reset } from 'styled-reset';
import Jumbotron from './components/Jumbotron';
import Intro from './components/Intro';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import CallToAction from './components/CallToAction';
import Team from './components/Team';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faEdit, faPrint, faBullhorn, faLightbulb, faDatabase, faGem } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faLinkedin, faInstagram, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';


library.add(fab, faLinkedin, faFacebookSquare, faInstagram, faTwitterSquare, faEdit, faPrint, faBullhorn, faLightbulb, faDatabase, faGem, faLaptopCode);


function App() {
  return (
    <div className="App">
       <React.Fragment>
        <Reset />
        <Jumbotron />
        <Intro />
        <About />
        <Portfolio />
        <CallToAction />
        <Services />
        <Team />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
