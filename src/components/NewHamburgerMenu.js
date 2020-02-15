import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, animateScroll as scroll } from "react-scroll";

const STYLES = styled.div`
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

const HamburgerIconContainer = styled.div`
    position: absolute;
    right: 20px;
    top: 20px;

    -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 1s; /* Firefox < 16 */
    -ms-animation: fadein 1s; /* Internet Explorer */
    -o-animation: fadein 1s; /* Opera < 12.1 */
    animation: fadein 1s;
`;

const NavigationUL = styled.ul`

    a {
        display: block;
        margin-top: 2.5rem;
        font-size: 1.4rem;
        color: snow;
    }
`;


const HamburgerMenu = (props) => {
    return (
        <STYLES>
            <HamburgerIconContainer>
                <FontAwesomeIcon
                    icon="times"
                    size="2x"
                    color="#FC4C46"
                    onClick={props.onMenuClick}
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
                    onClick={props.onMenuClick}
                >Home</Link>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                    onClick={props.onMenuClick}
                >About Us</Link>
                <Link
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                    onClick={props.onMenuClick}
                >Our Work</Link>
                <Link
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                    onClick={props.onMenuClick} 
                >Our Services</Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                    onClick={props.onMenuClick} 
                >Contact Us</Link>
            </NavigationUL>            
        </STYLES>
    );
}

export default HamburgerMenu;
