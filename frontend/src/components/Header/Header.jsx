import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import BrandLogo from "./BrandLogo";

export default function Header() {
	return (
		<header id="header" className="header">
			<Navbar collapseOnSelect expand="lg" className="box-shadow-soft bg-body-tertiary py-2">
				<Container fluid className="d-flex justify-content-between">
				<BrandLogo></BrandLogo>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto">
					<Nav.Link href="/buy">Buy</Nav.Link>
					<Nav.Link href="/signup">Error</Nav.Link>
					<NavDropdown title="Formación" id="collapsible-nav-dropdown">
						<NavDropdown.Item href="#">
							Games
						</NavDropdown.Item>
						<NavDropdown.Item href="#">
							Discover
						</NavDropdown.Item>
						<NavDropdown.Item href="#">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#">
							Search
						</NavDropdown.Item>
					</NavDropdown>
					</Nav>
				</Navbar.Collapse>
				</Container>
			</Navbar>
    	</header>
	)
}
