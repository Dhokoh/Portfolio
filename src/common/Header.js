import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <>
            <Navbar className='headerNav justify-content-center' fixed='top' >
                <Navbar.Brand className='navBrand'>David Ho - MERN Fullstack Web Dev</Navbar.Brand>
                <LinkContainer to="/">
                    <Nav.Link className='navLink' id='headerHome'>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/aboutme'>
                    <Nav.Link className='navLink' id='headerProducts'>About me</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/portfolio'>
                    <Nav.Link className='navLink' id='headerLogin'>Portfolio</Nav.Link>
                </LinkContainer>
            </Navbar>
        </>
    )
};

export default Header;