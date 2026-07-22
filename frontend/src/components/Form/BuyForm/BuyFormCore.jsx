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
				label="Your username"
				{...register("username")}
				placeholder="username"
			></TextFieldset>
		</Col>
		<Col>
		<TextFieldset
			label="Your email"
		type="email"
		placeholder="email"
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
		label="Your country"
		{...register("country")}
		placeholder="..."
		></TextFieldset>
		</Col>
	</Row>
	</>
  );
}
