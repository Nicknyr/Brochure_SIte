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
`;

const H2 = styled.h2`
    font-family: 'Frank Ruhl Libre', serif;
    color: grey;
    font-size: 1.8em;
    margin: 0 auto;
    width: 90%;
`

const P = styled.p`
    font-family: 'Roboto Condensed', sans-serif;
    width: 80%;
    margin: 0 auto;
    font-size: 1em;
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
    width: 15em;
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