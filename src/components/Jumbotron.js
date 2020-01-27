import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Sunset from '../assets/sunset-dark.jpg';
import Logo from '../assets/logo.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, animateScroll as scroll } from "react-scroll";

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
    //display: flex;
    justify-content: center;
    align-items: center;
    //position: relative;
`;

const INTRO = styled.div`
    margin-top: 5em;
    display: block;
`

const H1 = styled.h1`
    font-size: 2em;
    color: snow;
    width: 90%;
    margin: 0 auto;
    font-family: 'Frank Ruhl Libre', serif;

    @media(min-width: 768px) {
        width: 60%;
    }

    @media(min-width: 992px) {
        font-size: 3em;
    }
`;

const P = styled.p`
    font-size: 1em;
    color: snow;
    width: 60%;
    margin: 2em auto;
    line-height: 1.5;
    font-weight: 400;

    @media(min-width: 768px) {
        width: 40%;
    }

    @media(min-width: 992px) {
        font-size: 1.2em;
    }
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

    &:hover {
        filter: brightness(90%);
    }
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
        margin-right: 2em;
        margin-left: 2em;
        

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
                cursor: pointer;

                &:hover {
                    color: #01BE9D;
                }
            }
        }
    }

    @media(max-width: 786px) {
        display: none;
    }
`

const MOBILE = styled.div`
    height: 5em;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0%;
    left: 0%;
    background: #1E2019;
    //box-shadow: 0 4px 2px -2px #FC4C46;
    display: none;


    .fa-bars, .fa-times {
        margin-right: .7em;
    }

    @media(max-width: 786px) {
        display: flex;
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

const CONTAINER = styled.div`
    height: auto;
    width: 100%;
    position: absolute;
    top: 15%;

    @media(min-width: 786px) {
        top: 25%;
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

    scroll = () => {
        scroll.scrollToTop();
    }

    render() {
        return (
            <div>        
                    <STYLES>
                        <NAVBAR>
                            <ul>
                                <li> 
                                    <img src={Logo} height="200"/>
                                </li>
                                <li>
                                <Link
                                    activeClass="active"
                                    to="section1"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                >HOME</Link>
                                </li>
                                <li>
                                    <Link
                                        activeClass="active"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration= {500}
                                    >
                                        ABOUT US
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        activeClass="active"
                                        to="portfolio"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration= {500}
                                    >
                                        PORTFOLIO
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        activeClass="active"
                                        to="services"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration= {500}
                                    >
                                       SERVICES
                                    </Link>
                                </li>
                                <li>
                                    <a href="#">CONTACT</a>
                                </li>
                            </ul>
                        </NAVBAR>
                        <MOBILE>
                            <img src={Logo} height="100"/>
                            { this.state.menuOpen ?
                                <FontAwesomeIcon
                                    onClick={this.onMenuClick}
                                    icon={'times'}
                                    size="2x"
                                    color="snow"
                                />
                            : 
                                <FontAwesomeIcon
                                onClick={this.onMenuClick}
                                icon={'bars'}
                                size="2x"
                                color="snow"
                                />
                            }
                        </MOBILE>
                        
                        { this.state.menuOpen ?
                            <DROPDOWN>
                                <ul>
                                    <li>
                                        <Link
                                            activeClass="active"
                                            to="home"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration= {500}
                                        >
                                            HOME
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            activeClass="active"
                                            to="about"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration= {500}
                                        >
                                            ABOUT US
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            activeClass="active"
                                            to="portfolio"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration= {500}
                                        >
                                            PORTFOLIO
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            activeClass="active"
                                            to="services"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration= {500}
                                        >
                                            SERVICES
                                        </Link>
                                    </li>
                                    <li>
                                    <Link
                                        activeClass="active"
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration= {500}
                                    >
                                       CONTACT
                                    </Link>
                                    </li>
                                </ul>
                            </DROPDOWN>
                        : null }
                        <CONTAINER>
                            <ScrollAnimation animateIn="fadeIn" duration="5">
                                <INTRO>
                                    <H1>We believe in the power of effective branding and marketing</H1>
                                    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</P>
                                    <BUTTON>GET MY FREE QUOTE</BUTTON>
                                </INTRO>
                            </ScrollAnimation>
                        </CONTAINER>
                    </STYLES>
                    <button onClick={this.scroll}>Scroll to top</button>
            </div>
           
        );
    }
}
export default Jumbotron;