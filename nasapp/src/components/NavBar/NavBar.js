import React from 'react';
import NavBarLinks from './NavBarLinks';
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../../nasa.png'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" className="justify-content-between">
            <Navbar className="mr-auto">
                <img src={Logo} width="50" height="50" alt=''
                    className="d-inline-block align-top" />
                <NavBarLinks url="" />
                <NavBarLinks url="search" />
                <NavBarLinks url="favourites" />
            </Navbar>
        </Navbar>
    );
};

export default NavBar;
