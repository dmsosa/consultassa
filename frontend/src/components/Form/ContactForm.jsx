import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const razonesContacto = ["Gestion y Administracion", "Motivos generales", "Consultar un curso", "Inscribirme a un curso"];

export default function ContactForm() {

  const [ completed, setCompleted ] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    reason: "general",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.consent) {
      alert("You must accept the terms.");
      return;
    }

    console.log("Form submitted:", formData);
    setCompleted(true);

    setFormData({
      username: "",
      email: "",
      reason: "general",
      message: "",
      consent: false,
    });
  }; 
  return (
    <div className="container container-sm">
      {completed ? <div>thansk</div> 
      :
            <Form onSubmit={handleSubmit}>
        {/* Username */}
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Contact Reason */}
        <Form.Group className="mb-3" controlId="formReason">
          <Form.Label>Contact Reason</Form.Label>
          <Form.Select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
          >
            {razonesContacto.map((razon) => {
              return (<option value={razon}>General Inquiry</option>)
            })}
          </Form.Select>
        </Form.Group>

        {/* Message (optional) */}
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message (optional)</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Consent Checkbox */}
        <Form.Group className="mb-3" controlId="formConsent">
          <Form.Check
            type="checkbox"
            label="I agree to the terms and conditions"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      }

    </div>
  );
}
