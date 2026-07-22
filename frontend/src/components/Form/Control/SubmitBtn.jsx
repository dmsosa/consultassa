import { useFormState } from "react-hook-form";
import { FaCheck, FaSpinner } from "react-icons/fa";

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
		<div>
			<FaSpinner></FaSpinner>
			<span
              className="spinner-border spinner-border-sm"
              aria-hidden="true"></span>
			<span>wait...</span>
		</div>
		}
		<div>
			<FaCheck></FaCheck>
			<span role="status" className="ms-2">
				{text}
			</span>
		</div>
	</button>
  );
}
