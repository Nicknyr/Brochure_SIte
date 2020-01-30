import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const STYLES = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre|Roboto+Condensed&display=swap');
    font-family: 'Roboto Condensed', sans-serif;
    height: auto;
    display: flex;
    flex-direction: column;
    padding-top: 8em;
    padding-bottom: 8em;
    margin-left: 20px;
    margin-right: 20px;

    .h2-container {
        width: 100%;
        text-align: center;

        h2 {
            font-family: 'Frank Ruhl Libre', serif;
            font-size: 2em;
            color: black;
        }
    }

    @media(min-width: 768px) {
        margin: 0 2em;

        .h2-container {
            text-align: left;
        }
    }

    @media(min-width: 992px) {
        margin: 0 5em;
    } 
`;

const INFO = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;

    .details {
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        flex: 1;
        text-align: left;
        margin-top: 1em;
        margin-bottom: 1em;
        background: blue;
        
        p {
            margin-top: 1em;
            font-size: 1.1em;
        }
    }

    @media(min-width: 768px) {
            .details {
                margin-top: 0;
                margin-bottom: 0;
                justify-content: center;
            }
        }


    .social-ul {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-top: 1em;
        height: 2em;

        span {
            font-size: 1.1em;
        }
    }

    li {
        margin: 1em;
    }

    .social-p {
        margin-top: 3em;
    }
`; 

const LINE = styled.div`
    height: 3px;
    width: 9em;
    background: black;
    margin: 1.5em auto;

    @media(min-width: 768px) {
        text-align: left;
        margin: 0;
        margin-top: .5em;
    }
`;

const FORMCONTAINER = styled.div`
    height: 30em;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    margin-top: 3em;
    color: black;
    background: red;

    @media(min-width: 768px) {
        margin-top: 0;
        justify-content: center;
    }

    .form-row {
        display: flex;
        justify-content: flex-start;
        
        input {
            margin-top: 1.5em;
        }
    }

    input[type="text"] {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid black;
        width: 300px;
        color: black;
        height: 2em;
        padding: 0.2rem 0.2rem;
        font-size: 1rem;
        outline: none;


        textarea {
            display: block;
            width: 100%;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.8;
            color: #121212;
            background-color: black;
            background-clip: padding-box;
            border: 0 solid #ced4da;
            border-radius: 0;
            transition: border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
        }

        ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            color: black;
            font-size: 1em;
        }
        ::-moz-placeholder { /* Firefox 19+ */
            color: black;
            font-size: 1em;
        }
        :-ms-input-placeholder { /* IE 10+ */
            color: black;
            font-size: 1em;
        }
        :-moz-placeholder { /* Firefox 18- */
            color: black;
            font-size: 1em;
        }
        
    }


    .submit-button {
        background: red;
        display: inline-block;
        height: 5em;
        width: 8em;
        border: 0 solid transparent;
        text-align: center;
        vertical-align: middle;
        padding: 1.15rem 1.6rem;
        line-height: 1.3;
        transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 0.04rem;
        background-color: #01BE9D;
        color: #01BE9D;
        color: snow;
        opacity: 0.9;
        margin-top: 3em;

        &:hover {
            opacity: 1;
        }
    }
`;



const Contact = () => {
    return(
        <STYLES>
            <div className="h2-container">
                <h2>Contact us</h2>
                <LINE></LINE>
            </div>
            <INFO>
                <div className="details">
                    <p>Get in touch</p>
                    <p>256 LaFayette St</p>
                    <p>New York, NY 10001</p>
                    <p>mail@url.com</p>
                    <p>555-212-9999</p>
                    <div className="social-p">
                        <p>Get in touch on social media</p>
                    </div>
                    <ul class="social-ul">
                        <li>
                            <a href="">
                                <FontAwesomeIcon
                                    icon={['fab', 'linkedin']}
                                    size="lg"
                                    color="black"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FontAwesomeIcon
                                    icon={['fab', 'facebook-square']}
                                    size="lg"
                                    color="black"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FontAwesomeIcon
                                    icon={['fab', 'instagram']}
                                    size="lg"
                                    color="black"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FontAwesomeIcon
                                    icon={['fab', 'twitter-square']}
                                    size="lg"
                                    color="black"
                                />
                            </a>
                        </li>
                    </ul>  
                </div>
                <FORMCONTAINER>
                    <form>
                        <ul>
                            <li className="form-row">
                                <input type="text" placeholder="Your Name"></input>
                            </li>
                            <li className="form-row">
                                <input type="text" placeholder="Email"></input>
                            </li>
                            <li className="form-row">
                                <input type="text" placeholder="Your Message"></input>
                            </li>
                            <li className="form-row">
                                <button className="submit-button">Submit</button>
                            </li>
                        </ul>
                    </form>
                </FORMCONTAINER>          
            </INFO>
        </STYLES>
    );
}

export default Contact;