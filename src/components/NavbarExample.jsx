import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logonavbar from "../resources/logonavbar.png"

function NavbarExample() {
  return (
     <Navbar className="sticky-top" expand="lg">
      <Container>
        <img
              src={logonavbar}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        <Navbar.Brand href="/">Come with me  </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/joinus">Join Us</Nav.Link>
          <Nav.Link href="/aboutus">About Us</Nav.Link>
          <Nav.Link href="/aboutangola">About Angola</Nav.Link>
          <Nav.Link href="/contact">Contacts</Nav.Link>
          <Nav.Link>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarExample;