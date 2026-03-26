import { useState } from "react";
import FormFieldset from "../FormFieldset";

function SignUpForm() {
  const [{ username, email, password }, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm((form) => ({ ...form, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormFieldset
        name="username"
        required
        placeholder="Your Name"
        value={username}
        handler={inputHandler}
      ></FormFieldset>

      <FormFieldset
        name="email"
        type="email"
        required
        placeholder="Email"
        value={email}
        handler={inputHandler}
      ></FormFieldset>

      <FormFieldset
        name="password"
        type="password"
        required
        placeholder="Password"
        value={password}
        handler={inputHandler}
      ></FormFieldset>
      <button className="btn btn-lg btn-primary pull-xs-right">Sign up</button>
    </form>
  );
}

export default SignUpForm;
