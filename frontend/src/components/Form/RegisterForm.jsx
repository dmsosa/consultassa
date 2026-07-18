import { Col, Row } from "react-bootstrap";
import TextFieldset from "./Control/TextFieldset";
import { useForm } from "react-hook-form";

const defaultV = {
    username: "",
    email: "",
    age: undefined,
    country: "Spain" | "Portugal",
    mobile: undefined,
    birthday: new Date(),
    password: "",
    passwordConfirm: "",
    disability: false,
    gdpr: false,
}
export default function RegisterForm() {
  const { register, handleSubmit } = useForm({ defaultValues: defaultV })

  const onSubmit = async (formData) => {
	console.log(formData);
  }
  return (
	<form onSubmit={handleSubmit(onSubmit)} className="container mb-5">
		<Row>
			<Col>
				<TextFieldset
					{...register("username")}
					placeholder="Your Name"
				></TextFieldset>
	  		</Col>
			<Col>
			<TextFieldset
			type="email"
			placeholder="Your email"
			{...register("email")}
			></TextFieldset>
			</Col>
		</Row>
		<Row>
			<Col>
				<TextFieldset
				type="date"
				{...register("birthday")}
				placeholder="dateee"
				label="Your birthday"
				></TextFieldset>
	  		</Col>
			<Col>
			<TextFieldset
			{...register("country")}
			placeholder="countryy"
			></TextFieldset>
			</Col>
		</Row>
		<Row>
			<Col>
				<TextFieldset
					{...register("username")}
					placeholder="Your Name"
				></TextFieldset>
	  		</Col>
			<Col>
			<TextFieldset
			></TextFieldset>
			</Col>
		</Row>
		<Row>
			<Col>
				<TextFieldset
				></TextFieldset>
	  		</Col>
			<Col>
			<TextFieldset
			></TextFieldset>
			</Col>
		</Row>
	  <button className="btn btn-lg btn-primary pull-xs-right">Sign up</button>
	</form>
  );
}
