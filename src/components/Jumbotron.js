import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Sunset from '../assets/sunset-dark-resized.jpg';
import Logo from '../assets/logo.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, animateScroll as scroll } from "react-scroll";
import ScrollToTop from './ScrollToTop';
import HamburgerMenu from './NewHamburgerMenu';

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
    //background: #0E38B1;
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

    @media(max-width: 768px) {
        display: none;
    }
`

const CONTAINER = styled.div`
    height: auto;
    width: 100%;
    position: absolute;
    top: 15%;

    @media(min-width: 786px) {
        top: 25%;
    }
`;

const HamburgerIconContainer = styled.div`
    display: none;
    position: absolute;
    right: 20px;
    top: 20px;

    @media(max-width: 768px) {
        display: flex;
    }

`;


const HamburgerContainer = styled.div`
    height: 100vh;
    width: 100%;
    position: absolute;
    background: #01BE9D;
    z-index: 999;
    -webkit-animation: fadein .5s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein .5s; /* Firefox < 16 */
    -ms-animation: fadein .5s; /* Internet Explorer */
    -o-animation: fadein .5s; /* Opera < 12.1 */
    animation: fadein .5s;
    display: flex;
    align-items: center;
    justify-content: center;

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Firefox < 16 */
    @-moz-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Internet Explorer */
    @-ms-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Opera < 12.1 */
    @-o-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
`;

const NavigationUL = styled.ul`

    a {
        display: block;
        margin-top: 2.5rem;
        font-size: 1.4rem;
        color: snow;
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
                    </NAVBAR>
                    <HamburgerIconContainer>
                        <FontAwesomeIcon
                            icon="bars"
                            size="2x"
                            color="snow"
                            onClick={this.onMenuClick}
                        />
                    </HamburgerIconContainer>
                    {this.state.menuOpen ?
                        <HamburgerContainer>
                            <HamburgerIconContainer>
                                <FontAwesomeIcon
                                    icon="times"
                                    size="2x"
                                    color="#FC4C46"
                                    onClick={this.onMenuClick}
                                />
                            </HamburgerIconContainer>
                            <NavigationUL>
                                <Link
                                    activeClass="active"
                                    to="section1"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                    onClick={this.onMenuClick}
                                >Home</Link>
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                    onClick={this.onMenuClick}
                                >About Us</Link>
                                <Link
                                    activeClass="active"
                                    to="portfolio"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                    onClick={this.onMenuClick}
                                >Our Work</Link>
                                <Link
                                    activeClass="active"
                                    to="services"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                    onClick={this.onMenuClick} 
                                >Our Services</Link>
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                    onClick={this.onMenuClick} 
                                >Contact Us</Link>
                            </NavigationUL>        
                        </HamburgerContainer>
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
            </div>
           
        );
    }
}
export default Jumbotron;