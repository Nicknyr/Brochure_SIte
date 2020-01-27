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
    height: 100vh;
    width: 100%;
    background: #1E2019;
    position: relative;
    
`;

const SOCIAL = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 0;
    padding-bottom: 2em;
    padding-top: 2em;
`
const CONTAINER = styled.div`
   //background: red;

   ul {
    padding-top: 3em;


       li {
           display: flex;
           width: 100%;
           align-items: center;
           justify-content: space-around;
           color: snow;
           height: 3em;
       }
   }
`

const EXPANDED = styled.div`
    height: 10em;
    width: 50%; 
    display: block;
`;

const HIDDEN = styled.div`
    display: none;
`;

const CONTENT = styled.div`
    height: 5em;
    background: red;
    color: snow;
`;

const C = styled(Collapse)`
  transition: height 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expandSection: false
        };
    }

    onChevronClick = () => {
        this.setState(prevState => ({
            expandSection: !this.state.expandSection
        }));
    }

    render() {
        return (
            <STYLES>
                <ScrollToTop />
                <img src={Logo} />
                <CONTAINER>
                <ul>
                    <li>
                        <h3>COMPANY</h3>
                        {this.state.expandSection ? 
                            <FontAwesomeIcon
                                onClick={this.onChevronClick}
                                icon={'chevron-down'}
                                size="md"
                                color="snow"
                            />
                        : 
                            <FontAwesomeIcon
                                onClick={this.onChevronClick}
                                icon={'chevron-down'}
                                size="md"
                                color="snow"
                            />
                        }
                        
                        { this.state.expandSection ?
                            <EXPANDED>
                            <ul>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Press & Media</a>
                                </li>
                                <li>
                                    <a href="#">Careers</a>
                                </li>
                            </ul>
                        </EXPANDED>
                        : <HIDDEN></HIDDEN>}
                        
                    </li>
                    <li>
                        <h3>CONTACT</h3>
                        <FontAwesomeIcon
                            icon={'chevron-down'}
                            size="md"
                            color="snow"
                        />
                    </li>
                    <li>
                        <h3>CLIENTS</h3>
                        <FontAwesomeIcon
                            icon={'chevron-down'}
                            size="md"
                            color="snow"
                        />
                    </li>
                </ul>
                <SOCIAL>
                    <FontAwesomeIcon
                        icon={['fab', 'linkedin']}
                        size="2x"
                        color="snow"
                    />
                    <FontAwesomeIcon
                        icon={['fab', 'facebook-square']}
                        size="2x"
                        color="snow"
                    />
                    <FontAwesomeIcon
                        icon={['fab', 'instagram']}
                        size="2x"
                        color="snow"
                    />
                    <FontAwesomeIcon
                        icon={['fab', 'twitter-square']}
                        size="2x"
                        color="snow"
                    />
                   
                </SOCIAL>
                </CONTAINER>
                
                
                {/*
                <img src={Logo} />
                <ul>
                    <li>
                        <h3>Company</h3>
                        <li>
                            <a href="">One</a>
                        </li>
                        <li>
                            <a href="">Two</a>
                        </li>
                        <li>
                            <a href="">Three</a>
                        </li>
                        <li>
                            <a href="">Four</a>
                        </li>
                    </li>
                </ul>
                <SOCIAL>
                    <FontAwesomeIcon
                        icon={['fab', 'linkedin']}
                        size="2x"
                        color="snow"
                    />
                    <FontAwesomeIcon
                        icon={['fab', 'facebook-square']}
                        size="2x"
                        color="snow"
                    />
                    <FontAwesomeIcon
                        icon={['fab', 'instagram']}
                        size="2x"
                        color="snow"
                    />
                    <FontAwesomeIcon
                        icon={['fab', 'twitter-square']}
                        size="2x"
                        color="snow"
                    />
                    <FontAwesomeIcon
                        icon={'edit'}
                        size="2x"
                        color="snow"
                    />
                </SOCIAL>
                */}
            </STYLES>
        );
    }
}
    

export default Footer;
