import { forwardRef } from "react";

const TextFieldset = forwardRef(({
	autoFocus,
	label = undefined,
	normal = false,
	placeholder,
	type = "text",
	error,
	...register
	}, ref) => {
	return (
		<fieldset className="form-group">
			{label && <label>{label}</label>}
			<input
				autoFocus={autoFocus}
				className={`form-control ${normal ? "" : "form-control-lg"}`}
				placeholder={placeholder}
				type={type}
				{...register}
				ref={ref}
			/>
			{error && <div className="fieldset-error">{error.message}</div>}
		</fieldset>
	)
});

export default TextFieldset;