import { useFormState } from "react-hook-form";

export default function SubmitBtn(props) {
	const { clazz = "btn-primary", text = "confirm", control } = props;
	const { isSubmitting, isSubmitted, isLoading, isValid } = useFormState({ control });

  return (
	<button className="btn btn-primary"
	disabled={isSubmitting || !isValid}
	>
		{
		isSubmitting 
		&& 
		<>
			<span
              className="spinner-border spinner-border-sm"
              aria-hidden="true"></span>
			<span>wait...</span>
		</>
		}
		<span role="status" className="ms-1">
			{text}
		</span>
	</button>
  );
}
