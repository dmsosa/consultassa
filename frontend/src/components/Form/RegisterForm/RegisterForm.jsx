import { Col, Row } from "react-bootstrap";
import TextFieldset from "../Control/TextFieldset";
import { FormProvider, useForm } from "react-hook-form";
import SubmitBtn from "../Control/SubmitBtn";
import Core from "./Core";
import FormLoader from "../FormLoader";
import Items from "./Items";

const defValues = {
	orderId: 0,
	orderNo: new Date().valueOf(),
	placedOn: new Date(),
	username: "",
	email: "",
	country: "Spain",
	mobile: "",
    password: "",
    passwordConfirm: "",
	age: undefined,
	birthday: new Date(),
	paymentMethod: "",
	deliveryIn: 0,
	foodItems: [{ foodId: 0, price: 0, quantity: 0, totalPrice: 0 }],
	gTotal: 0,
	address: {
		streetAddress: "",
		landmark: "",
		city: "",
		state: "",
	},
	gdpr: false,
	disability: false,
}

const id = 0;

export default function RegisterForm() {

	const methods = useForm({
		defaultValues: async () => {
			if (id == 0) return new Promise((resolve) => resolve(defValues))
			else {
			const tempOrder = await fetchLastOrder();
			return new Promise((resolve) =>
				resolve(tempOrder ? tempOrder : defValues)
			)
			}
		},
		mode: "onChange",
	});

	const { 
		handleSubmit,
		control,
		reset,
		clearErrors,
		setError,
		formState,
	 } = methods;

	const onSubmit = async (formData) => {
		//add a delay
		await new Promise((resolve) => setTimeout(resolve, 1500))
		formData.orderId = 1
		formData.placedOn = new Date()
		// setError("email",{type:"duplicateEmail",message:"The email already taken."})
		// createOrder(formData)
		console.log("submitted form data", formData)
	}

	const onError = (err) => {
		console.log("validation errors", err)
	}

	const onReset = () => {
		reset(initialValues, { keepErrors: true })
		// clearErrors()
	}

  return (
		<form onSubmit={handleSubmit(onSubmit)} className="container mb-5">
			<FormLoader control={control}></FormLoader>
			<FormProvider {...methods}>
				<Core></Core>
				<Items></Items>
			</FormProvider>
			<SubmitBtn control={control} text={"send"}></SubmitBtn>
			<button className="btn btn-danger ms-2"></button>
		</form>
  );
}
