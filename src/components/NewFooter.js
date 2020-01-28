import React from 'react';
import styled, { css } from 'styled-components';
import Logo from '../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const STYLES = styled.div`
@import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre|Roboto+Condensed&display=swap');
    font-family: 'Roboto Condensed', sans-serif;
    height: auto;
    width: 100%;
    //background: #1E2019;
    background: #646361;
    margin: 1em auto;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    //padding: .5em;

    

    @media(min-width:768px) {
        flex-direction: row;
        
    }

    .top-ul {
        order: 0;
        width: 80%;
        margin: 0 auto;
        margin-top: 3em;

        @media(min-width: 768px) {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            width: 100%;

            li {
                padding: 2em;
            }
        }

        @media(min-width: 992) {
            width: 80%;
        }

        li {
            //border: 2px solid red;
            width: 100%;
            height: 30vh;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 3em;
            color: snow;
            text-align: left;
            //width: 80%;

            h4 {
                font-size: 1.4em;
                margin-bottom: .3em;
                font-weight: bold;
                color: #EBEBEB;
            }

            p {
                //margin-left: 1.5em;
                margin-bottom: 3em;
                text-decoration: underline;
                line-height: 1.5;
                font-weight: lighter;
                color: #EBEBEB;
                color: #01BE9D;
            }
        }

        .locations {
            //background: red;
            height: auto;
            text-align: left;

            @media(min-width: 768px) {
                text-align: center;
            }
            

            h4 {
                font-size: 1em;
                font-weight: lighter;
                margin-bottom: 1em;
                //margin-top: 1em;
                color: #01BE9D;
            }

            p {
                font-size: 1.2em;
                font-weight: bold;
                text-decoration: none;
                margin-bottom: 0;
                color: #EBEBEB;
            }
        }
    }

    .bottom-ul {
        height: auto;
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: 0 auto;
        
        @media(min-width: 768px) {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }

        li {
            width: 100%;
            height: auto;
        }
    }

    .nav-links {
        height: auto;
        margin-top: 5em;
        margin-bottom: 5em;
        text-align: left;
        //padding-left: 1.5em;

        li {
            height: auto;
            margin-top: 1em;
            margin-bottom: 1em;
            
            a {
                color: snow;
                text-decoration: none;
                font-size: 1.2em;
                margin-top: 10em;
            }
        }

        @media(min-width: 768px) {
            display: flex;
        }
    }

        .social-links {
        height: auto;
        display: flex;
        padding-bottom: 1em;

        li {
            height: auto;
        }
    }

    .logo {
        order: 0;
    }
`;

const NEWSLETTER = styled.form`
    //height: 20em;
    //width: 20em;
    //background: red;

    input[type="text"] {
        border: 0;
        outline: 0;
        background: transparent;
        border-bottom: 1px solid snow;
        color: snow;
        font-size: 1em;
        width: 100%;
        margin-top: 1em;
        margin-bottom: .3em;
    }

        input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            color: snow;
            font-size: .9em;
        }
        input::-moz-placeholder { /* Firefox 19+ */
            color: snow;
            font-size: .9em;
        }
        input:-ms-input-placeholder { /* IE 10+ */
            color: snow;
            font-size: .9em;
        }
        input:-moz-placeholder { /* Firefox 18- */
            color: snow;
            font-size: .9em;
        }

    input[type="checkbox"] {
        text-align: left;
        position: relative;
        top: 0;
        left: 0px;
        width: 20px;
    }

    span {
        font-size: .9em;
    }

    .privacy {
        font-weight: bold;
    }

    div {
        padding-top: 1em;
    }

    button {
        height: auto;
        width: auto;
        padding: .5em;
        background: #01BE9D;
        color: snow;
        font-weight: bold;
        border: none;
        cursor: pointer;
        font-size: 1.2em;
        display: block;
        margin-top: 1.5em;

        &:hover {
            filter: brightness(90%);
        }
    }
`;


const NewFooter = () => {
    return (
        <STYLES>
            <ul className="top-ul">
                <li>
                    <h4>Want to create something cool togehter?</h4>
                    <p>Get in touch</p>

                    <h4>Join the team and make cool stuff with us!</h4>
                    <p>View positions</p>
                </li>
                <li className="locations">
                    <h4>NYC Location</h4>
                    <p>123 Broadway,</p>
                    <p>New York, NY 10001</p>

                    <h4>Miami Location</h4>
                    <p>528 Sullivan St,</p>
                    <p>Miami, FL 33101</p>
                </li>
                <li>
                    <h4>Join Our Newsletter</h4>
                    <NEWSLETTER>
                        <input type="text" placeholder="Contact Us"></input>
                        <div>
                            <input type="checkbox"></input>
                            <span>I give my consent that my personal information can be collected and used in conjunction with the <span className="privacy">privacy policy</span></span>
                            <button>SUBMIT</button>
                        </div>
                    </NEWSLETTER>
                    
                </li>
            </ul>
            {/*
            <ul className="bottom-ul">
                <li className="logo">
                   <img src={Logo} height="150" />
                </li>
                <li>
                    <ul className="nav-links">
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Our Work</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className="social-links">
                        <li>
                            <a href="#">
                                <FontAwesomeIcon
                                    icon={['fab', 'linkedin']}
                                    size="2x"
                                    color="snow"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon
                                    icon={['fab', 'facebook-square']}
                                    size="2x"
                                    color="snow"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon
                                    icon={['fab', 'instagram']}
                                    size="2x"
                                    color="snow"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon
                                    icon={['fab', 'twitter-square']}
                                    size="2x"
                                    color="snow"
                                />
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
            */}
        </STYLES>
    );
}

export default NewFooter;