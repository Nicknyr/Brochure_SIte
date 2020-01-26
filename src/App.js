import React from 'react';
import './App.css';
import { Reset } from 'styled-reset';
import Jumbotron from './components/Jumbotron';
import Intro from './components/Intro';
import About from './components/About';
import Portfolio from './components/Portfolio';
import CallToAction from './components/CallToAction';
import Team from './components/Team';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faLinkedin, faInstagram, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';


library.add(fab, faCheckSquare, faLinkedin, faFacebookSquare, faInstagram, faTwitterSquare);


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
        <Team />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
