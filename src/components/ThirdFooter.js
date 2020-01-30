import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const STYLES = styled.div`
    height auto;
    width: 100%;
    //background: salmon;
    background: #0E38B1;
    color: snow;
    font-size: 18px;
`;

const FOOTER = styled.footer`
    padding: 3rem 0;
    line-height: 1.8;
`;

const CONTAINER = styled.div`
    //background: grey;
    height: 100%;
    width: auto;
    margin-right: 20px;
    margin-left: 20px;
    display: flex;
    flex-wrap: wrap;

    @media(min-width: 768px) {
        padding-left: 5%;
        padding-right: 5%;
    }

    .section-1, .section-2, .section-3, .section-4 {
        width: 100%;
    }


    .section {
        display: flex;
        flex-direction: column;
        height: auto;
        text-align: left;
        //width: 100%;
        
        .inner {
            //background: red;
            margin: 0 0 2rem;
            font-size: 1rem;
            width: 100%;
        }

        .split {
            //background: red;
            width: 100%;
        }

        a {
            color: #ECD2C9;
            text-decoration: underline;
        }

        h5 {
            font-size: 1.2rem;
            line-height: 1.45;
            font-weight: 400;
            margin-bottom: .2em;
        }

        p {
            margin-bottom: .2em;
        }
    }

    .nav-container {
        margin-top: 1rem;
        
        .nav {
            display: flex;
            flex-wrap: wrap;

            li {
                font-size: 1.4rem;
                

                a {
                    text-decoration: none;
                    margin: .2rem;
                    color: snow;
                }
            }
        }

        .social-ul {
            margin-top: 1.3rem;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-evenly;

            li {
                
            }
        }
    }

    @media(min-width: 768px) {
        .section {
            //width: 50%;
            flex-direction: column;
        }

        .section-1 {
            flex-flow: column nowrap;
            justify-content: space-between;
            flex: 1;

            .inner {
                width: 100%;
                height: 8em;
            }
        }


        .section-3 {
            flex-direction: row;
            //width: 100%;
            //flex: 1;
        }

        .nav-container {
            display: flex;
            flex-direction: row;
            width: 100%;

            .nav {
                flex: 2;

                li {
                    font-size: 1.2rem;
                }
            }

            .social-ul {
                margin: 0;
                justify-content: space-evenly;
            }

            .social-media-icons {
                justify-content: space-evenly;
                flex: 1;
            }
        }
    }

    @media(min-width: 992px) {
        .section-2 {
            flex-flow: column nowrap;
            justify-content: space-between;
            flex: 1;
        }

        .section-3 {
            margin-top: 5rem;

            .nav {
                flex: 2;

                li {
                    margin-left: .5em;
                    margin-right: .5em;
                }
            }
        }

        .section-4 {
           margin-top: 4rem;
           align-items: center;
       }
    }
    
`;


const FORM = styled.form`
    height: auto;
    width: 100%;
    //background: green;

    .form-element {
        margin-bottom: 1.2rem;
    }

    .input-wrapper {
        width: 100%;
        background-color: transparent;
        overflow: auto;
    }


    input[type="text"] {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #fff;
        width: 100%;
        color: #fff;
        height: 2em;
        padding: 0.7rem 0.7rem;
        font-size: 1rem;
        outline: none;

        textarea {
            display: block;
            width: 100%;
            //height: calc(1.8em + 1.4rem + 0);
            //padding: 0.7rem 0.7rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.8;
            color: #121212;
            background-color: #fff;
            background-clip: padding-box;
            border: 0 solid #ced4da;
            border-radius: 0;
            transition: border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
        }

        ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            color: #fff;
            font-size: 1.2rem;
        }
        ::-moz-placeholder { /* Firefox 19+ */
            color: #fff;
            font-size: 1.2rem;
        }
        :-ms-input-placeholder { /* IE 10+ */
            color: #fff;
            font-size: 1.2rem;
        }
        :-moz-placeholder { /* Firefox 18- */
            color: #fff;
            font-size: 1.2rem;
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
        background-color: #ECD2C9;
        color: #0E38B1;
        //color: salmon;
        opacity: 0.65;
    }

`;

 const COPYRIGHT = styled.div`
    margin-top: 1.3rem;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    //justify-content: space-evenly;
    font-size: 1rem;
    color: #ECD2C9;
 `;

const ThirdFooter = () => {
    return(
        <STYLES>
            <FOOTER>
                <CONTAINER>
                    <div className="section section-1"> 
                        <div className="inner split">
                            <h5>Let's create something good together</h5>
                            <a href="">Get in touch</a>
                        </div>
                        <div className="inner split">
                            <h5>Join our team</h5>
                            <a href="">View open positions</a>
                        </div>
                    </div>
                    <div className="section section-1">
                        <div className="inner">
                            <h5>NYC Office</h5>
                            <p>
                                356 Lafayette St.
                                <br/>
                                New York, NY 10001
                            </p>
                        </div>
                        <div className="inner">
                            <h5>Miami Office</h5>
                            <p>
                                98 Biscayne Blvd.
                                <br/>
                                Miami, FL 33101
                            </p>
                        </div>
                    </div>
                    <div className="section section-2">
                        <h5>Keep up with news from us</h5>
                        <FORM>
                            <div className="form-element">
                                <div className="input-wrapper">
                                    <input type="text" placeholder="Email Address *"></input>
                                </div>
                            </div>
                            <div className="form-element">
                                <div className="privacy">
                                    <input type="checkbox"></input>
                                    <label>I give my consent that my personal information can be collected and used according to the privacy policy</label>
                                </div>
                            </div>
                            <div className="form-element">
                                <div className="button-container">
                                    <button className="submit-button">Submit</button>
                                </div>
                            </div>
                        </FORM>
                    </div>
                    <div className="section section-3">
                        <div className="nav-container">
                            <ul className="nav nav-footer">
                                <li>
                                    <a href="">Services</a>
                                </li>
                                <li>
                                    <a href="">About</a>
                                </li>
                                <li>
                                    <a href="">Work</a>
                                </li>
                                <li>
                                    <a href="">Blog</a>
                                </li>
                                <li>
                                    <a href="">Careers</a>
                                </li>
                                <li>
                                    <a href="">Contact</a>
                                </li>
                            </ul>
                            <div className="social-media-icons">
                                <ul class="social-ul">
                                    <li>
                                        <a href="">
                                            <FontAwesomeIcon
                                                icon={['fab', 'linkedin']}
                                                size="lg"
                                                color="snow"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <FontAwesomeIcon
                                                icon={['fab', 'facebook-square']}
                                                size="lg"
                                                color="snow"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <FontAwesomeIcon
                                                icon={['fab', 'instagram']}
                                                size="lg"
                                                color="snow"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <FontAwesomeIcon
                                                icon={['fab', 'twitter-square']}
                                                size="lg"
                                                color="snow"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="section section-4">
                        <COPYRIGHT>
                            <p>&#169; Company 2020
                                <span> | </span>
                                <a href="#">Privacy Policy</a>
                            </p>
                        </COPYRIGHT>
                    </div>
            </CONTAINER>
            </FOOTER>
        </STYLES>
    );
}

export default ThirdFooter;