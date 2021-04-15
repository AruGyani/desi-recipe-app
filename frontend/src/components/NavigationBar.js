import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import '../styles/NavigationBar.css'

function NavigationBar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
            <NavbarBrand className="logo" href="/">desitrak</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem className="item">
                        <NavLink className="link" href="/about">About</NavLink>
                    </NavItem>
                    <NavItem className="item">
                        <NavLink className="link" href="/login">Login</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar;