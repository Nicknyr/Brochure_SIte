import React from 'react';
import styled, { css } from 'styled-components';
import Guy1 from '../assets/guy1.jpg';
import Guy2 from '../assets/guy2.jpg';
import Guy3 from '../assets/guy3.jpg';
import Woman from '../assets/woman.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollToTop from './ScrollToTop';

const STYLES = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre|Roboto+Condensed&display=swap');
    font-family: 'Roboto Condensed', sans-serif;
    //font-family: 'Frank Ruhl Libre', serif;
    height: auto;
    width: 100%;
    padding-top: 8em;
    padding-bottom: 8em;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        
        li {
            margin-top: 2.5em;
            margin-bottom: 2.5em;
            position: relative;
        }
    }
    
    @media(min-width: 992px) {
        ul {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            width: 80%;
            margin: 0 auto;

            li {
               width: 100%;
               margin-top: 3em;
               margin-bottom: 3em;
               position: relative;
            }
        }
    }

`;

const H2 = styled.h2`
    font-family: 'Frank Ruhl Libre', serif;
    font-size: 2em;
    color: black;
`;

const LINE = styled.div`
    height: 3px;
    width: 9em;
    background: black;
    margin: 1.5em auto;
`;

const CONTAINER = styled.div`
    position: relative;
    width: 100%;
    max-width: 300px;

    &:hover .middle {
        opacity: 1;
    }   

    &:hover .text {
        opacity: 1;
    }

    img {
        display: block;
        width: 100%;
        height: auto;

        &:hover {
            filter: brightness(30%);
        }
    }

    .overlay {
        position: absolute;
        background: rgb(0, 0, 0);
        background: rgba(0, 0, 0, 0.5); /* Black see-through */        
        color: #f1f1f1; 
        width: 100%;
        transition: .5s ease;
        color: white;
        font-size: 1.2em;
        line-height: 1.3;
        bottom: 0%;
        left: 0%;
        opacity: .9;
    }

    .middle {
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;

        &:hover {
            opacity: 1;
        }

    }

    .text {
        color: white;
        font-size: 16px;
    }

`;



const Team = () => {
    return (
        <STYLES>
            <ScrollToTop />
            <H2>Our Team</H2>
            <LINE></LINE>
            <ul>
                <ScrollAnimation animateIn="zoomIn" duration="1">
                    <li>
                        <CONTAINER>
                            <img src={Guy1} />
                            <div className="middle">
                                <div className="text">
                                    <a href="#">
                                        <FontAwesomeIcon
                                            icon={['fab', 'linkedin']}
                                            size="3x"
                                            color="#01BE9D"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="overlay">
                                <p>John Doe</p>
                                <p>Chief Financial Officer</p>
                            </div>  
                        </CONTAINER>
                    </li>
                </ScrollAnimation>
                <ScrollAnimation animateIn="zoomIn" duration="1">
                    <li>
                        <CONTAINER>
                            <img src={Woman} />
                            <div className="middle">
                                <div className="text">
                                    <a href="#">
                                        <FontAwesomeIcon
                                            icon={['fab', 'linkedin']}
                                            size="3x"
                                            color="#01BE9D"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="overlay">
                                <p>John Doe</p>
                                <p>Chief Financial Officer</p>
                            </div>  
                         </CONTAINER>
                    </li>
                </ScrollAnimation>
                <ScrollAnimation animateIn="zoomIn" duration="1">
                    <li>
                        <CONTAINER>
                            <img src={Guy2} />
                            <div className="middle">
                                <div className="text">
                                    <a href="#">
                                        <FontAwesomeIcon
                                            icon={['fab', 'linkedin']}
                                            size="3x"
                                            color="#01BE9D"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="overlay">
                                <p>John Doe</p>
                                <p>Chief Financial Officer</p>
                            </div>  
                         </CONTAINER>
                    </li>
                </ScrollAnimation>
                <ScrollAnimation animateIn="zoomIn" duration="1">
                    <li>
                        <CONTAINER>
                            <img src={Guy3} />
                            <div className="middle">
                                <div className="text">
                                    <a href="#">
                                        <FontAwesomeIcon
                                            icon={['fab', 'linkedin']}
                                            size="3x"
                                            color="#01BE9D"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="overlay">
                                <p>John Doe</p>
                                <p>Chief Financial Officer</p>
                            </div>  
                         </CONTAINER>
                    </li>
                </ScrollAnimation>
                <ScrollAnimation animateIn="zoomIn" duration="1">
                    <li>
                        <CONTAINER>
                            <img src={Guy1} />
                            <div className="middle">
                                <div className="text">
                                    <a href="#">
                                        <FontAwesomeIcon
                                            icon={['fab', 'linkedin']}
                                            size="3x"
                                            color="#01BE9D"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="overlay">
                                <p>John Doe</p>
                                <p>Chief Financial Officer</p>
                            </div>  
                         </CONTAINER>
                    </li>
                </ScrollAnimation>
                <ScrollAnimation animateIn="zoomIn" duration="1">
                    <li>
                        <CONTAINER>
                            <img src={Guy3} />
                            <div className="middle">
                                <div className="text">
                                    <a href="#">
                                        <FontAwesomeIcon
                                            icon={['fab', 'linkedin']}
                                            size="3x"
                                            color="#01BE9D"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="overlay">
                                <p>John Doe</p>
                                <p>Chief Financial Officer</p>
                            </div>  
                         </CONTAINER>
                    </li>
                </ScrollAnimation>
            </ul>
        </STYLES>
    );
}

export default Team;