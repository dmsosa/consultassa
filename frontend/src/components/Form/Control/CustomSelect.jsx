import { forwardRef } from "react";

const CustomSelect = forwardRef(({
	label = undefined,
	id = undefined,
	clazz = "custom-select",
	error,
	opts,
	...register
	}, ref) => {
	return (
		<fieldset className="form-group">
			{label && <label>{label}</label>}
			<select id={id} className={`${clazz}`} {...register} ref={ref}>
				{ opts.map((op) => (
					<option
					disabled={op.disabled} 
					key={op.value}
					value={op.value}
					>
						{op.text}
					</option>
				)) }
			</select>
			{error && <div className="fieldset-error">{error.message}</div>}
		</fieldset>
	)
});

export default CustomSelect;