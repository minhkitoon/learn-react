import React from 'react';
import './header.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <Container>
            <header className='header'>
                <a href="/" className='navbar-brand' id="logo">{props.logo}</a>
                <Nav className='navbar navbar-fixed-top navbar-custom'>
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/gallery">Gallery</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/team">Team</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/services">Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/features">Features</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/pricing">Pricing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='discover-btn' href="/get-started">Get Started</Nav.Link>
                    </Nav.Item>
                </Nav>
            </header>
        </Container>
    );
}

export default Header;