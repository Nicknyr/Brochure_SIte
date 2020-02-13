import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Logo from '../assets/logo.svg';
import Collapse from 'react-css-collapse';
import ScrollToTop from './ScrollToTop';


const STYLES = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre|Roboto+Condensed&display=swap');
    font-family: 'Roboto Condensed', sans-serif;
    height: 5em;
    width: 100%;
    background: #646361;
    display: flex;
    align-items: center;
    
    p {
        margin-left: 6em;
        color: snow;
    }
`;


const Footer = () => {
    return (
        <STYLES>
            <p>Copyright 2020</p>
        </STYLES>
    );
}
    

export default Footer;
