export default function FormFieldset(props) {
	const {
  autoFocus,
  label = undefined,
  normal,
  placeholder,
  type = "text",
} = props;
  return (
    <fieldset className="form-group">
        {label && <label>{label}</label>}
		<input
			autoFocus={autoFocus}
			className={`form-control ${normal ? "" : "form-control-lg"}`}
			placeholder={placeholder}
			type={type}
			{...registerFunc}
		/>
		{error && <div className="fieldset-error">{error.message}</div>}
    </fieldset>
  );
}
