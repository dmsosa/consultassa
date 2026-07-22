import { useFormContext } from "react-hook-form";
import SubmitBtn from "../Control/SubmitBtn";
import BuyFormCore from "./BuyFormCore";
import FormLoader from "../FormLoader";
import BuyFormItems from "./BuyFormItems";



export default function BuyForm() {


	const { control, handleSubmit, reset, formState } = useFormContext();

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
			<BuyFormCore></BuyFormCore>
			<BuyFormItems></BuyFormItems>
			<div className="d-flex justify-content-end align-items-center gap-2">
				<SubmitBtn control={control} text={"Confirm"}></SubmitBtn>
				<button className="btn btn-danger ms-2">Cancel</button>
			</div>
		</form>
  );
}
