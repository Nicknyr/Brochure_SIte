import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const STYLES = styled.div`
    height: 3.5em;
    width: 3.5em;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: sticky;

    &:hover {
        background-color: rgba(0, 0, 0, 0.6);
    }
`;

class ScrollToTop extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    scroll = () => {
        scroll.scrollToTop();
    }

    render() {
        return (
            <STYLES onClick={this.scroll}>
                <FontAwesomeIcon
                        icon={'arrow-alt-circle-up'}
                        size="2x"
                        color="snow"
                    />
            </STYLES>
        );
    }
}

export default ScrollToTop;