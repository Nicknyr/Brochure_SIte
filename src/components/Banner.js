import React from 'react';
import styled, { css } from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollToTop from './ScrollToTop';

const STYLES = styled.div`
    height: 60vh;
    width: 100%;
    background: #646361;
    //background: #0E38B1;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        color: snow;
        font-size: 1.6em;
        line-height: 1.4;
        width: 90%;
        margin: 0 auto;
    }

    @media(min-width: 768px) {
        height: 30vh;

        h2 {
            font-size: 2em;
            width: 70%;
        }
    }
`;

const Banner = () => {
    return(
        <STYLES>
            <ScrollAnimation animateIn="fadeIn" duration="1">
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
            </ScrollAnimation>
        </STYLES>
    );
}

export default Banner;