import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Sunset from '../assets/sunset.jpg';
import Logo from '../assets/logo.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// #01BE9D

const STYLES = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre|Roboto+Condensed&display=swap');
    font-family: 'Roboto Condensed', sans-serif;
    //font-family: 'Frank Ruhl Libre', serif;
    height: 100vh;
    width: 100%;
    background-image: url(${Sunset});
    background-size: cover;
    //filter: brightness(70%);  
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const INTRO = styled.div`
    margin-top: 5em;
`

const H1 = styled.h1`
    font-size: 2em;
    color: snow;
    width: 90%;
    margin: 0 auto;
    font-family: 'Frank Ruhl Libre', serif;
`;

const P = styled.p`
    font-size: 1em;
    color: snow;
    width: 60%;
    margin: 2em auto;
    line-height: 1.5;
    font-weight: 400;
`;

const BUTTON = styled.button`
    width: 12em;
    height: 3em;
    font-size: .9em;
    background: #FC4C46;
    display: block;
    margin: 3em auto;
    border: none;
    color: snow;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
`;

const NAVBAR = styled.div`
    height: 10em;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Roboto Condensed', sans-serif;

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 10em;
        width: 100%;
        

        li {
            display: inline-block;
            margin-left: 1em;
            margin-right: 1em;
    
            :first-child {
                margin-right: auto;
            }

            a {
                text-decoration: none;
                color: snow;
                font-size: 1.1em;

                &:hover {
                    color: #01BE9D;
                }
            }
        }
    }
`

const MOBILE = styled.div`
    height: 5em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0%;
    left: 0%;
    background: #1E2019;
    box-shadow: 0 4px 2px -2px #FC4C46;


    .fa-bars {
        margin-right: .7em;
    }
`;

const DROPDOWN = styled.div`
    height: 30em;
    width: 100%;
    background: #1E2019;
    display: block;
    position: absolute;
    top: 5em;
    z-index: 100;

    ul {

        li {
            margin: 2em;
            border-top: .5px solid rgba(255,250,250, 0.5);
            border-bottom: .5px solid rgba(255,250,250, 0.5);
            height: 2em;
            display: flex;
            justify-content: center;
            align-items: center;

            a {
                text-decoration: none;
                color: snow;
            }
        }
    }
`;


class Jumbotron extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuOpen: false
        };
    }

    onMenuClick = () => {
        this.setState(prevState => ({
            menuOpen: !this.state.menuOpen
        }));    
    }

    render() {
        return (
            <div>
                {/*
                <NAVBAR>
                    <ul>
                        <li> 
                            <img src={Logo} height="200"/>
                        </li>
                        <li>
                            <a href="#">HOME</a>
                        </li>
                        <li>
                            <a href="#">ABOUT US</a>
                        </li>
                        <li>
                            <a href="#">PORTFOLIO</a>
                        </li>
                        <li>
                            <a href="#">SERVICES</a>
                        </li>
                        <li>
                            <a href="#">CONTACT</a>
                        </li>
                    </ul>
                </NAVBAR>
                */}
                    <STYLES>
                        <MOBILE>
                            <img src={Logo} height="100"/>
                            <FontAwesomeIcon
                                onClick={this.onMenuClick}
                                icon={'bars'}
                                size="2x"
                                color="snow"
                            />
                        </MOBILE>
                        
                        { this.state.menuOpen ?
                            <DROPDOWN>
                                <ul>
                                    <li>
                                        <a href="#">HOME</a>
                                    </li>
                                    <li>
                                        <a href="#">ABOUT US</a>
                                    </li>
                                    <li>
                                        <a href="#">PORTFOLIO</a>
                                    </li>
                                    <li>
                                        <a href="#">SERVICES</a>
                                    </li>
                                    <li>
                                        <a href="#">CONTACT</a>
                                    </li>
                                </ul>
                            </DROPDOWN>
                        : null }
                    
                        <ScrollAnimation animateIn="fadeIn" duration="5">
                            <INTRO>
                                <H1>We believe in the power of effective branding and marketing</H1>
                                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</P>
                                <BUTTON>GET MY FREE QUOTE</BUTTON>
                            </INTRO>
                        </ScrollAnimation>
                    </STYLES>
            </div>
           
        );
    }
}
export default Jumbotron;