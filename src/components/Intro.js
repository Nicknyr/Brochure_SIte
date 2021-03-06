import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

const STYLES = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre|Roboto+Condensed&display=swap');
    font-family: 'Roboto Condensed', sans-serif;
    height: 80vh;
    width: 100%;
    background: snow;
    position: relative;
    padding-top: 3em;
    padding-bottom: 3em;

    @media(min-width: 992px) {
        height: 70vh;
    }
`;

const H2 = styled.h2`
    font-family: 'Frank Ruhl Libre', serif;
    color: grey;
    font-size: 1.8em;
    margin: 0 auto;
    width: 90%;

    @media(min-width: 768px) {
        width: 60%;
    }

    @media(min-width: 992px) {
        width: 80%;
        font-size: 2.2em;
    }
`

const P = styled.p`
    font-family: 'Roboto Condensed', sans-serif;
    width: 80%;
    margin: 0 auto;
    font-size: 1em;

    @media(min-width: 768px) {
        width: 40%;
    }

    @media(min-width: 992px) {
        width: 60%;
        font-size: 1.1em;
    }
`

const CONTAINER = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`;

const LINE = styled.div`
    height: 3px;
    width: 10em;
    background: green;
    margin: 2em auto;
`;

const BUTTON = styled.button`
    width: 10em;
    height: 3em;
    font-size: .9em;
    background: #01BE9D;
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

const Intro = () => {
    return(
        <div>
            <STYLES>
                <CONTAINER>
                    <ScrollAnimation animateIn="fadeIn" duration="2">
                        <H2>Introducing the flexible and more efficient way to promote your business</H2>
                        <LINE></LINE>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</P>
                        <BUTTON>GET TOUCHED</BUTTON>
                    </ScrollAnimation>
                </CONTAINER>
            </STYLES>
        </div>
    );
}

export default Intro;