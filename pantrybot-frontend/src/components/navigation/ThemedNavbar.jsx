import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import routes from '../../constants/routes';

export default function ThemedNavbar() {
  return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href={routes.index}>PantryBot Logo Placeholder</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end">
            <Nav className="d-flex gap-3">
              <Nav.Link href={routes.login}>Login</Nav.Link>
              <Button variant="primary" href={routes.signup}>Signup</Button>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
