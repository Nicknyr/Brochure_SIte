import React from 'react';
import styled, { css } from 'styled-components';
import Guy1 from '../assets/guy1.jpg';
import Guy2 from '../assets/guy2.jpg';
import Guy3 from '../assets/guy3.jpg';
import Woman from '../assets/woman.jpg';

const STYLES = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre|Roboto+Condensed&display=swap');
    font-family: 'Roboto Condensed', sans-serif;
    //font-family: 'Frank Ruhl Libre', serif;
    height: auto;
    width: 100%;
    padding-top: 3em;
    padding-bottom: 3em;

    ul {
        li {
            margin-bottom: 3em;
            position: relative;
            
        }
    }
    /*
    .about {
        position: absolute;
        height: 3.5em;
        width: 400px;
        background: rgba(1,190,157, 0.8);
        bottom: 0;
        left: 0;
        margin: 0 auto;
        opacity: .8;
    }

    .about-details {
        opacity: 1;
        color: white;
        font-weight: bolder;
    }
    */
`;

const H2 = styled.h2`
    font-family: 'Frank Ruhl Libre', serif;
    font-size: 2em;
    color: black;
`;

const LINE = styled.div`
    height: 3px;
    width: 9em;
    background: black;
    margin: 1.5em auto;
`;

const Team = () => {
    return (
        <STYLES>
            <H2>Our Team</H2>
            <LINE></LINE>
            <ul>
                <li>
                    <img src={Guy1} height="200" />
                    <div className="about">
                        <div className="about-details">
                          <p>John Doe</p>
                          <p>Chief Financial Officer</p>
                        </div>  
                    </div>
                </li>
                <li>
                    <img src={Woman} height="200" />
                    <div className="about">
                        <p>Amanda Jones</p>
                        <p>Head of Marketing</p>
                    </div>
                </li>
                <li>
                    <img src={Guy2} height="200" />
                    <div className="about">
                        <p>Mike Tarantino</p>
                        <p>Software Engineer</p>
                    </div>
                </li>
                <li>
                    <img src={Guy3} height="200" />
                    <div className="about">
                        <p>Francios Perron</p>
                        <p>UX Designer</p>
                    </div>
                </li>
            </ul>
        </STYLES>
    );
}

export default Team;