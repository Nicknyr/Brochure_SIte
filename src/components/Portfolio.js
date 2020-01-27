import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Boxes from '../assets/boxes.jpg';
import Javascript from '../assets/javascript.jpg';
import Money from '../assets/money.jpg';
import Skyscrapers from '../assets/skyscrapers.jpg';
import Team from '../assets/team.jpg';
import Whiteboard from '../assets/whiteboard.jpg';
import Writing from '../assets/writing.jpg';
import Lightbulb from '../assets/lightbulb.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollToTop from './ScrollToTop';

const STYLES = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre|Roboto+Condensed&display=swap');
    font-family: 'Roboto Condensed', sans-serif;
    //font-family: 'Frank Ruhl Libre', serif;
    height: auto;
    width: 100%;
    padding-top: 8em;
    padding-bottom: 8em;

    h2 {
        font-family: 'Frank Ruhl Libre', serif;
        font-size: 2em;
        color: black;
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        li {
            margin-top: 2.5em;
            margin-bottom: 2.5em;
            margin: 2em;

        }
    }

    @media(min-width: 992px) {
        ul {
            flex-direction: row;
            flex-wrap: wrap;

            li {
               margin-top: 3em;
               margin-bottom: 3em;
            }
        }

    }
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

    img {
        &:hover {
            filter: brightness(40%);
        }
    }

    &:hover .overlay {
        opacity: 1;
    }   

    .overlay {
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
        color: snow;
        font-size: 1.5em;

        &:hover {
            opacity: 1;
        }
    }
`;

class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    render() {
        return (
            <STYLES>
                <h2>Portfolio</h2>
                <LINE></LINE>
                <ul name="portfolio">
                    <ScrollAnimation animateIn="zoomIn" duration="1">
                        <li>
                            <CONTAINER>
                                <img src={Boxes} height="200"/>
                                <div className="overlay">
                                    <p>Project One</p>
                                </div>
                            </CONTAINER>
                        </li>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="zoomIn" duration="1">
                        <li>
                            <CONTAINER>
                                <img src={Javascript} height="200"/>
                                <div className="overlay">
                                    <p>Project Two</p>
                                </div>
                            </CONTAINER>
                        </li>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="zoomIn" duration="1">
                        <li>
                            <CONTAINER>
                                <img src={Money} height="200"/>
                                <div className="overlay">
                                    <p>Project Three</p>
                                </div>
                            </CONTAINER>
                        </li>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="zoomIn" duration="1">
                        <li>
                            <CONTAINER>
                                <img src={Skyscrapers} height="200"/>
]                                <div className="overlay">
                                    <p>Project Four</p>
                                </div>
                            </CONTAINER>
                        </li>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="zoomIn" duration="1">
                        <li>
                            <CONTAINER>
                                <img src={Team} height="200"/>
                                <div className="overlay">
                                    <p>Project Five</p>
                                </div>
                            </CONTAINER>
                        </li>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="zoomIn" duration="1">
                        <li>
                            <CONTAINER>
                                <img src={Whiteboard} height="200"/>
                                <div className="overlay">
                                    <p>Project Six</p>
                                </div>
                            </CONTAINER>
                        </li>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="zoomIn" duration="1">
                        <li>
                            <CONTAINER>
                                <img src={Writing} height="200"/>
                                <div className="overlay">
                                    <p>Project Seven</p>
                                </div>
                            </CONTAINER>
                        </li>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="zoomIn" duration="1">
                        <li>
                            <CONTAINER>
                                <img src={Lightbulb} height="200"/>
                                <div className="overlay">
                                    <p>Project Eight</p>
                                </div>
                            </CONTAINER>
                        </li>  
                    </ScrollAnimation>
                </ul>
            </STYLES>
        );
    }
}

export default Portfolio;