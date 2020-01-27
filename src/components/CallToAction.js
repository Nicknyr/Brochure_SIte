import React from 'react';
import styled, { css } from 'styled-components';
import PalmTrees from '../assets/palmtrees-dark.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

const STYLES = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre|Roboto+Condensed&display=swap');
    height: 60vh;
    width: 100%;
    background: url(${PalmTrees});
    background-size: cover;
    padding-top: 3em;
    padding-bottom: 3em;
    position: relative;

    @media(min-width: 768px) {
        height: 40vh;
    }
`;

const CONTAINER = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    //background: red;

    @media(min-width: 786px) {
        width: 70%;
        font-size: 1.2em;
    }
`;

const H2 = styled.h2`
    font-family: 'Frank Ruhl Libre', serif;
    font-size: 2em;
    color: snow;
    width: 90%;
    margin: 0 auto;
`;

const BUTTON = styled.button`
    width: 8em;
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

const CallToAction = () => {
    return (
        <STYLES>
            <CONTAINER>
                <ScrollAnimation animateIn="fadeIn" duration="2">
                    <H2>Introducing the flexible and more efficient way to promote your business</H2>
                    <BUTTON>CONTACT US</BUTTON>
                </ScrollAnimation>
            </CONTAINER>
        </STYLES>
    );
}

export default CallToAction;