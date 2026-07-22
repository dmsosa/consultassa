
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import BrandLogo from "../Header/BrandLogo";

function Footer() {
  return (
	<footer className="container-fluid bg-body-tertiary pt-5 px-3 mt-5">
      <Container className="border-top py-3">
        <Row>
          <Col md={2} className="col-6 mb-3">
			<BrandLogo></BrandLogo>
            <p className="font-italic">
              Let our customers have more fun with the .
            </p>
          </Col>

          <Col md={2} className="col-6 mb-3">
            <h5>Services</h5>
            <ul className="nav flex-colum">
              <li className="nav-item mb-2"><a href="/" className="nav-link text-body-secondary">Careers</a></li>
              <li className="nav-item mb-2"><a href="/services" className="nav-link text-body-secondary">Study with us</a></li>
              <li className="nav-item mb-2"><a href="/about" className="nav-link text-body-secondary">Our partners</a></li>
            </ul>
          </Col>

          <Col md={2} className="col-6 mb-3">
            <h5>Sections</h5>
            <ul className="nav flex-colum">
				<li className="nav-item mb-2"><a href="#" className="nav-link p-2 text-body-secondary">Home</a></li>
				<li className="nav-item mb-2"><a href="#" className="nav-link p-2 text-body-secondary">Features</a></li>
				<li className="nav-item mb-2"><a href="#" className="nav-link p-2 text-body-secondary">Pricing</a></li>
				<li className="nav-item mb-2"><a href="#" className="nav-link p-2 text-body-secondary">FAQs</a></li>
				<li className="nav-item mb-2"><a href="#" className="nav-link p-2 text-body-secondary">About</a></li>
			</ul>
          </Col>
			<Col md={5} className="offset-md-1 mb-3">
            <h5>Contacto</h5>
            <p>Email: info@consultassa.com</p>
            <p>Phone: +34 600 123 456</p>
            <div className="d-flex justify-content-start">
              <a href="#" className="text-light me-3"><FaFacebook /></a>
              <a href="#" className="text-light me-3"><FaTwitter /></a>
              <a href="#" className="text-light"><FaLinkedin /></a>
            </div>
          </Col>
        </Row>

        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 pt-4 mt-4 border-top">
            <p className="text-center text-primary-emphasis fw-light fs-6">
              © {new Date().getFullYear()} Consultas S.A. All rights reserved.
            </p>
			<ul className="list-unstyled d-flex align-items-center">
				<li className="ms-3">
					<a href="#" aria-label="Instagran" className="link text-primary-emphasis fs-6">
						<FaInstagram></FaInstagram>
					</a>
				</li>
				<li className="ms-3">
					<a href="#" aria-label="Facebook" className="link text-primary-emphasis fs-6">
						<FaFacebook></FaFacebook>
					</a>
				</li>
			</ul>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;