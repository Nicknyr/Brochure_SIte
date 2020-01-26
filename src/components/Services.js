import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const STYLES = styled.div`
    height: auto;
    width: 100%;
    padding-top: 3em;
    padding-bottom: 3em;
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

const H3 = styled.h3`
    font-family: 'Frank Ruhl Libre', serif;
    color: grey;
    font-size: 1.2em;
    margin: .8em auto;
    color: #01BE9D;
    font-weight: bold;
`;

const P = styled.p`
    font-family: 'Roboto Condensed', sans-serif;
    width: 80%;
    margin: 0 auto;
    font-size: 1em;
    line-height: 1.2;
`

const UL = styled.ul`
    li {
        margin-top: 5em;
    }
`;


const Services = () => {
    return (
        <STYLES>
            <H2>Services</H2>
            <LINE></LINE>
            <UL>
                <li>
                    <FontAwesomeIcon
                        icon={'laptop-code'}
                        size="4x"
                        color="black"
                    />
                    <H3>Web Design</H3>
                    <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat interdum varius sit amet.
                    </P>
                </li>
                <li>
                    <FontAwesomeIcon
                        icon={'database'}
                        size="4x"
                        color="black"
                    />
                    <H3>Web Development</H3>
                    <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus in ornare quam viverra orci.
                    </P>
                </li>
                <li>
                    <FontAwesomeIcon
                        icon={'print'}
                        size="4x"
                        color="black"
                    />
                    <H3>Print Design</H3>
                    <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor condimentum lacinia quis vel eros donec ac odio tempor.
                    </P>
                </li>
                <li>
                    <FontAwesomeIcon
                        icon={'lightbulb'}
                        size="4x"
                        color="black"
                    />
                    <H3>Ideas</H3>
                    <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet risus feugiat in ante metus dictum at tempor commodo.
                    </P>
                </li>
                <li>
                    <FontAwesomeIcon
                        icon={'bullhorn'}
                        size="4x"
                        color="black"
                    />
                    <H3>Marketing</H3>
                    <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare lectus sit amet est placerat.
                    </P>
                </li>
                <li>
                    <FontAwesomeIcon
                        icon={'edit'}
                        size="4x"
                        color="black"
                    />
                    <H3>Copyrighting</H3>
                    <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas integer eget aliquet nibh.
                    </P>
                </li>
            </UL>
        </STYLES>
    );
}

export default Services;