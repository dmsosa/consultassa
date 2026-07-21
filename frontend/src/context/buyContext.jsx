import { FormProvider, useForm } from "react-hook-form";

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
	items: [{ id: 0, title: "", price: 0, quantity: 0, totalPrice: 0 }],
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

export function BuyFormProvider({ children }) {

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
		reset,
		formState,
	 } = methods;
	return (
		<FormProvider {...methods}>
			{children}
		</FormProvider>
	)
}
