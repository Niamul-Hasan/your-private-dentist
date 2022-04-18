import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import logo from "../../../images/Your Private Dentist-logos_black.png"
import auth from '../../../Firebase.init';
import Loading from '../Loading/Loading';
import "./Header.css";

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
                        <img src={logo} height={90} width={120} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>

                        <Nav>
                            <NavLink as={Link} to="blog"
                                className={({ isActive }) => (isActive ? "active-link" : "link")}
                            >Blogs</NavLink>
                            <NavLink as={Link} to="about"
                                className={({ isActive }) => (isActive ? "active-link" : "link")}
                            >About</NavLink>

                            {/* login aor logOut part */}

                            {user ? <Nav.Link onClick={handleLogOut}><span
                                style={{ color: 'orange', fontWeight: 'bold', marginLeft: '15px', fontSize: '20px' }}>LogOut</span></Nav.Link> : <NavLink as={Link}
                                    to="/login" className={'link'}>LogIn</NavLink>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;