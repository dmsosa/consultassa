import React from "react";
import { coursesObjects } from "../../data/courses";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";

const BuyPreview = () => {
	
	const { getValues } = useFormContext();
	const { fields } = useFieldArray({ name: "items" });
  return (
	<div className="rounded bordered d-flex align-items-center justify-content-between bg-secondary">
	  	<span>{`Total items in cart: ${fields.length}`}</span>
		<div className="d-flex align-items-center justify-content-center">
			<Link to={"/buy"} type="button" className="btn btn-primary">Buy order</Link>
			<span className="fw-bold">{"$" + getValues(`gTotal`)}</span>
		</div>
	</div>
  );
};

export default BuyPreview;