import React from 'react';
import styled, { css } from 'styled-components';
import Customer from '../assets/customer.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

const STYLES = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre|Roboto+Condensed&display=swap');
    font-family: 'Roboto Condensed', sans-serif;
    height: auto;
    width: 100%;
    background: #01BE9D;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5em;
    padding-bottom: 5em;

    img {
        border-radius: 50%;
    }

    .container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        //background: orange;
        margin: 0 auto;
        background: rgba(0,0,0,.75);
        opacity: .93;
        

        p {
            margin-top: 3em;
            //font-weight: bold;
            width: 90%;
            font-size: 1.1em;
            line-height: 1.5;
            color: snow;
            text-align: left;
            font-style: italic;
        }

        .name {
            margin-top: 1em;
            text-align: center;
        }
    }

    @media(min-width: 768px) {
        .image-container {
            flex: 1;
            //background: red;
        }
        
        .container {
            width: 80%;
            flex-wrap: nowrap;

            p {
                flex: 2;
                margin-top: 0;
            }
        }

        .name {
            //margin-top: 2em;
            color: snow;
            font-size: 1.5em;
            width: 100%;
            text-align: center;
        }
    }

`;


const Review = () => {
    return (
        <STYLES>
            <ScrollAnimation animateIn="fadeIn" duration="2">
                <div className="container">
                    <div className="image-container">
                        <img src={Customer} height="200" width="auto" />
                    </div>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et odio pellentesque diam volutpat commodo sed egestas egestas. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Cum sociis natoque penatibus et magnis dis parturient montes."</p>
                </div>
                <p className="name">-- Jane Doe, Small Business Owner</p>
            </ScrollAnimation>
        </STYLES>
    );
}

export default Review;