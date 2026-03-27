import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../assets/logo.png";

export const Header = () => (
  <header id="header" className="">
  <Navbar collapseOnSelect expand="lg" className="box-shadow-soft bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
          <img src={logo} alt="Consultas S.A. logo" />
          <span className="fs-2">Consultas S.A.</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/login">Iniciar seción</Nav.Link>
              <Nav.Link href="/signup">Registrarse</Nav.Link>
              <NavDropdown title="Formación" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Administración y Gestión</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>

)