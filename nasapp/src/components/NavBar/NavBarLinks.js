import React from 'react';
import Nav from 'react-bootstrap/Nav'

const NavBarLinks = (props) => {

    const generateTitle = (str) => '' === str ? 'home' : str

    return (
        <Nav.Link href={'/' + props.url}> {generateTitle(props.url)} </Nav.Link>
    );
};

export default NavBarLinks;
