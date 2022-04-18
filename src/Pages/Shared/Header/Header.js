import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
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

                        </Nav>

                        <Nav>
                            <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="checkout">Apoinment</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {user ? <Nav.Link onClick={handleLogOut}><span
                                style={{ color: 'orange', fontWeight: 'bold' }}>LogOut</span></Nav.Link> : <Nav.Link as={Link}
                                    to="/login">LogIn</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;