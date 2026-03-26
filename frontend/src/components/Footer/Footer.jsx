
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 pb-2 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>Consultas S.A.</h5>
            <p>
              Providing professional consulting services to help your business grow and succeed.
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Contact</h5>
            <p>Email: info@consultas.com</p>
            <p>Phone: +34 600 123 456</p>
            <div>
              <a href="#" className="text-light me-3"><FaFacebook /></a>
              <a href="#" className="text-light me-3"><FaTwitter /></a>
              <a href="#" className="text-light"><FaLinkedin /></a>
            </div>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="text-center">
            <small>
              © {new Date().getFullYear()} Consultas S.A. All rights reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;