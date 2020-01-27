import React from 'react';
import './App.css';
import { Reset } from 'styled-reset';
import Jumbotron from './components/Jumbotron';
import Intro from './components/Intro';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import CallToAction from './components/CallToAction';
import Banner from './components/Banner';
import Team from './components/Team';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faTimes, faEdit, faPrint, faBullhorn, faLightbulb, faDatabase, faGem, faBars, faChevronCircleUp, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faLinkedin, faInstagram, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';


library.add(fab, faTimes, faLinkedin, faFacebookSquare, faInstagram, faTwitterSquare, faEdit, faPrint, faBullhorn, faLightbulb, faDatabase, faGem, faLaptopCode, faBars, faChevronCircleUp, faChevronUp, faChevronDown);

/*

xs = Extra small <576px
Max container width None (auto)

sm = Small ≥576px
Max container width 540px

md = Medium ≥768px
Max container width 720px

lg = Large ≥992px
Max container width 960px

xl = Extra large ≥1200px
Max container width 1140px

*/

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
        <Banner />
        <Team />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
