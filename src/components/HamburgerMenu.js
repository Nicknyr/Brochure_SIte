import React from 'react';
import styled, { css } from 'styled-components';
import { elastic as Menu } from 'react-burger-menu';
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from '../assets/logo.svg';

const STYLES = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre|Roboto+Condensed&display=swap');
    font-family: 'Roboto Condensed', sans-serif;
    display: flex;

    /* Position and sizing of burger button */
    .bm-burger-button {
        position: absolute;
        width: 36px;
        height: 30px;
        top: 5%;
        right: 5%;
    }
    
    /* Color/shape of burger icon bars */
    .bm-burger-bars {
        background: snow;
    }
    
    /* Color/shape of burger icon bars on hover*/
    .bm-burger-bars-hover {
        background: snow;
    }
    
    /* Position and sizing of clickable cross button */
    .bm-cross-button {
        height: 24px;
        width: 24px;
    }
    
    /* Color/shape of close button cross */
    .bm-cross {
        background: #01BE9D;
    }
    
    /*
    Sidebar wrapper styles
    Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
    */
    .bm-menu-wrap {
        position: fixed;
        height: 100%;
    }
    
    /* General sidebar styles */
    .bm-menu {
        background: #1E2019;
        padding: 2.5em 1.5em 0;
        font-size: 1.2em;
    }
    
    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
        fill: #1E2019;
    }
    
    /* Wrapper for item list */
    .bm-item-list {
        color: snow;
        padding: 0.8em;
    }
    
    /* Individual item */
    .bm-item {
        display: inline-block;
        color: snow;
        text-align: left;
        font-size: 1.2em;
        margin-top: 1em;
        text-decoration: none;
        font-family: 'Roboto Condensed', sans-serif;

        &:hover {
            color: #01BE9D;
        }
    }
    
    /* Styling of overlay */
    .bm-overlay {
        background: rgba(0, 0, 0, 0.3);
    }

    @media(min-width: 768px) {
        display: none;
    }

`;

class HamburgerMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuOpen: false
        }
    }


    showSettings (event) {
      event.preventDefault();
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
      }

    toggleMenu = () => {
        this.setState(prevState => ({
            menuOpen: !this.state.menuOpen
        }));
    }
  
    render () {
      return (
          <STYLES>
                <Menu 
                    right 
                    isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}>
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        onClick={this.toggleMenu}
                    >Home</Link>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        onClick={this.toggleMenu}
                    >About Us</Link>
                    <Link
                        activeClass="active"
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        onClick={this.toggleMenu}
                    >Our Work</Link>
                    <Link
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        onClick={this.toggleMenu} 
                    >Our Services</Link>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        onClick={this.toggleMenu} 
                    >Contact Us</Link>
                    {/*
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About Us</a>
                    <a id="contact" className="menu-item" href="/contact">Portfolio</a>
                    <a onClick={ this.showSettings } className="menu-item--small" href="">Contact Us</a>
                    */}
                </Menu>
          </STYLES>
      );
    }
  }

  export default HamburgerMenu;