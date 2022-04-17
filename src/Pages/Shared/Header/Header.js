import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import logo from "../../../images/logo.png"
import auth from '../../../Firebase.init';
import Loading from '../Loading/Loading';

const Header = () => {

    const [user, loading] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth);
    }
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} height={90} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            {user ? <Nav.Link onClick={handleLogOut}>LogOut</Nav.Link> : <Nav.Link as={Link} to="/login">LogIn</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;