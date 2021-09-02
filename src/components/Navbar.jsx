import React from 'react'
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Menu inverted>
            <Container>
                <Link to="/about"> 
                    <Menu.Item name='about' />
                </Link>
                <Link to="/movies">
                    <Menu.Item name='movies' />
                </Link>

            </Container>
        </Menu>
    )
}

export default Navbar
