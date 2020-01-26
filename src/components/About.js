import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const STYLES = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre|Roboto+Condensed&display=swap');
    font-family: 'Roboto Condensed', sans-serif;
    //font-family: 'Frank Ruhl Libre', serif;
    height: auto;
    //width: 100%;
    background: #646361;
    color: snow;
    padding: 3em 1em;
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
            <H2>About Us</H2>
            <LINE></LINE>
            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras sed felis eget velit aliquet sagittis id consectetur purus. Nulla facilisi morbi tempus iaculis. Nisi quis eleifend quam adipiscing vitae proin. Tortor at risus viverra adipiscing at in. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Dolor purus non enim praesent elementum. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Sed risus ultricies tristique nulla.</P>
        </STYLES>
    );
}

export default About;