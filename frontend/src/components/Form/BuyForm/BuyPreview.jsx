import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const BuyPreview = () => {
	
	const { getValues, control } = useFormContext();
	const { fields } = useFieldArray({ control, name: "items" });
	console.log(fields);
  return (
	<div className="rounded w-100 bordered d-flex align-items-center px-4 py-2 justify-content-between bg-body-secondary mb-3">
		<div>
			<FaShoppingCart className="d-inline me-3 mb-2 fs-3"></FaShoppingCart>
			<h4 className="d-inline fw-bold">{`Total items in cart: ${fields.length}`}</h4>
		</div>
		<div className="d-flex align-items-center justify-content-center gap-2">
			<span className="fw-bold">{"$" + getValues(`gTotal`)}</span>
			<Link to={"/buy"} type="button" className="btn btn-primary">Buy order</Link>
		</div>
	</div>
  );
};

export default BuyPreview;