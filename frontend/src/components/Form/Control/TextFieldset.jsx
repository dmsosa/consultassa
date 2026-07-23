import { forwardRef } from "react";

const TextFieldset = forwardRef(({
	autoFocus,
	label = undefined,
	normal = false,
	placeholder,
	clazz,
	type = "text",
	error,
	...register
	}, ref) => {
	return (
		<fieldset className="form-group mb-2">
			{label && <label className="form-label">{label}</label>}
			<input
				autoFocus={autoFocus}
				className={`form-control ${clazz} ${normal ? "" : "form-control-lg"}`}
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