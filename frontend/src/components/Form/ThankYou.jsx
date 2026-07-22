import { FaCircleCheck } from "react-icons/fa6";

export default function ThankYou({ onReset }) {
  return (
    <div className="thank-you">
      <FaCircleCheck />

      <h2>Thank You!</h2>

      <p>
        Your message has been submitted successfully.
        <br />
        We'll get back to you soon.
      </p>

      <button onClick={onReset}>
        Continue
      </button>
    </div>
  );
}

