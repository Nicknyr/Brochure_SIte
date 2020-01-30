import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollToTop from './ScrollToTop';

const STYLES = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre|Roboto+Condensed&display=swap');
    font-family: 'Roboto Condensed', sans-serif;
    //font-family: 'Frank Ruhl Libre', serif;
    height: auto;
    //background: #646361;
    background: #0E38B1;
    color: snow;
    padding: 3em 1em;
    display: flex;
    flex-direction: column;

    .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
    }

    .column-1 .column-2 {
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        width: 100%;
    }

    .about-container {
        margin: 0 auto;
    }

    @media screen and (min-width: 992px) {
        padding: 6em;
        height: auto;
        align-items: center;
        justify-content: center;

        .column-1 {
            width: 20em;
        }

        .column-2 {
            flex: 1;
        }
}

`;

const H2 = styled.h2`
    font-family: 'Frank Ruhl Libre', serif;
    font-size: 2em;
    color: snow;
`;

const LINE = styled.div`
    height: 3px;
    width: 9em;
    background: snow;
    margin: 1.5em auto;
`;

const P = styled.p`
    font-size: 1em;
    line-height: 1.5;
    color: snow;
    text-align: left;
    margin: 0 auto;
    font-weight: 500;
`;

const About = () => {
    return (
        <STYLES>
                <ScrollAnimation animateIn="fadeIn" duration="2">
                <div className="row" name="about">
                    <div className="column-1 about-container">
                        <H2>About Us</H2>
                        <LINE></LINE>
                    </div>
                    <div className="column-2">
                    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras sed felis eget velit aliquet sagittis id consectetur purus. Nulla facilisi morbi tempus iaculis. Nisi quis eleifend quam adipiscing vitae proin. Tortor at risus viverra adipiscing at in. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Dolor purus non enim praesent elementum. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Sed risus ultricies tristique nulla.</P>
                    </div>
                    </div>
                </ScrollAnimation>
            {/*<ScrollToTop />*/}
        </STYLES>
    );
}

export default About;