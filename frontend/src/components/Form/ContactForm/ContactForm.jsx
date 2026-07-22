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
    <div className="container-sm mt-5">
      {completed ? <div>thansk</div> 
      :
		<>
			<h4>Contact us</h4>
			<Form onSubmit={handleSubmit} className="order-0 order-md-1 container-flex-child">
			{/* Username */}
			<Form.Group className="mb-3" controlId="formUsername">
			<Form.Label>Username</Form.Label>
			<Form.Control
				type="text"
				placeholder="Enter username"
				name="username"
				className="input-custom"
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
				className="input-custom"
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
				className="input-custom-select"
			>
				{razonesContacto.map((razon) => {
				return (<option key={razon} value={razon}>General Inquiry</option>)
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
		</>
      }

    </div>
  );
}
