
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 pb-4 mt-5">
      <Container className="flex-column flex-md-row">
        <Row>
          <Col md={4} className="mb-3">
            <h5>Consultas S.A.</h5>
            <p>
              Brindar servicios de consultoría profesional para ayudar a que su negocio crezca y tenga éxito.
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Servicios</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Inicio</a></li>
              <li><a href="/services" className="text-light text-decoration-none">Atención al cliente</a></li>
              <li><a href="/about" className="text-light text-decoration-none">Sobre nosotros</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Empleos</a></li>
            </ul>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Contacto</h5>
            <p>Email: info@consultassa.com</p>
            <p>Phone: +34 600 123 456</p>
            <div className="d-flex justify-content-center">
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