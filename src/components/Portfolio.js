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

const STYLES = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre|Roboto+Condensed&display=swap');
    font-family: 'Roboto Condensed', sans-serif;
    //font-family: 'Frank Ruhl Libre', serif;
    height: auto;
    width: 100%;
    padding-top: 3em;

    h2 {
        font-family: 'Frank Ruhl Libre', serif;
        font-size: 2em;
        color: black;
    }

    ul {
        //display: flex;

        li {
            margin-bottom: 3em;
        }
    }
`;

const LINE = styled.div`
    height: 3px;
    width: 9em;
    background: black;
    margin: 1.5em auto;
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
                <ul>
                    <ScrollAnimation animateIn="slideInLeft" duration="1">
                        <li>
                            <img src={Boxes} height="200"/>
                        </li>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="slideInRight" duration="1">
                        <li>
                            <img src={Javascript} height="200"/>
                        </li>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="slideInLeft" duration="1">
                        <li>
                            <img src={Money} height="200"/>
                        </li>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="slideInRight" duration="1">
                        <li>
                            <img src={Skyscrapers} height="200"/>
                        </li>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="slideInLeft" duration="1">
                        <li>
                            <img src={Team} height="200"/>
                        </li>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="slideInRight" duration="1">
                        <li>
                            <img src={Whiteboard} height="200"/>
                        </li>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="slideInLeft" duration="1">
                        <li>
                            <img src={Writing} height="200"/>
                        </li>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="slideInRight" duration="1">
                        <li>
                            <img src={Lightbulb} height="200"/>
                        </li>  
                    </ScrollAnimation>
                </ul>
            </STYLES>
        );
    }
}

export default Portfolio;