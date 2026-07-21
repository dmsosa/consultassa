import { Col, Row } from "react-bootstrap";
import TextFieldset from "../Control/TextFieldset";
import { useFormContext } from "react-hook-form";

export default function BuyFormCore() {

	const { register } = useFormContext();
  return (
	<>
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
			placeholder="Date"
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
	</>
  );
}
