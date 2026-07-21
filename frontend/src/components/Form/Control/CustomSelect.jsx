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
				<div className="selected-content-wrapper">
					<selectedcontent></selectedcontent>
					<svg className="picker" width="24" height="24" viewBox="0 0 24 24">
						<path fill="red" d="m7 10l5 5l5-5z"/>
					</svg>
				</div>
				{ opts.map((op) => (
					<option
					disabled={op.disabled} 
					key={op.value}
					value={op.value}
					>
						<div class="custom-option">
							<span className="icon"></span>
							<span>{op.text}</span>
							<span class="description">{op.desc}</span>
						</div>
					</option>
				)) }
			</select>
			{error && <div className="fieldset-error">{error.message}</div>}
		</fieldset>
	)
});

export default CustomSelect;