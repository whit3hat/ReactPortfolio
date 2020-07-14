import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavbarSample = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const tobbleNavbar = () => setCollapsed(!Collapsed);

    return (
        <div>
            <Navbar color='faded' light>
                <NavbarBrand href='/' className='mr-auto'>ReactStrap</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className='mr-2' />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href='/'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='https://github.com'>GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarSample;