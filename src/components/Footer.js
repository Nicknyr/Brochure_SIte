import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';


const STYLES = styled.div`
    height: 100vh;
    width: 100%;
    background: #646361;
`;

const Footer = () => {
    return (
        <STYLES>
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
        </STYLES>
    );
}

export default Footer;
