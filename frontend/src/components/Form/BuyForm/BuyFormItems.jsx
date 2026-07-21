import { useFieldArray, useFormContext, useFormState } from "react-hook-form";
import CustomSelect from "../Control/CustomSelect";
import { useEffect, useState } from "react";
import { itemsGetAll } from "../../../data/items";

export default function BuyFormItems() {
  const [items, setItems] = useState([])
  const [opts, setOpts] = useState([])

  useEffect(() => {

    itemsGetAll().then((data) => {
		const tempOptions = data.items.map((x) => ({
			value: x.id,
			icon: x.icon,
			text: x.title,
			desc: x.description.slice(0, 15),
		}))
		setItems(data)
    	setOpts([...tempOptions])
	}).catch((err) => {
		console.log("Error while fetching items in BuyFormItems component", err);
	})

    
  }, [])

	const { register, getValues, setValue, trigger } = useFormContext();
	const { fields, append, remove } = useFieldArray({ name: "items"});
  	
	const onRowAdd = (e) => {
		e.preventDefault();
		append({ id: 0, title: "", price: 0, quantity: 0, totalPrice: 0 });
 	}

	const onRowDelete = (e) => {
		console.log("Fired event, e", e);
		alert("item removed from the cart")
		const existingIndex = fields.findIndex((f) => f.id === itemId);
		if (existingIndex >= 0) remove(existingIndex);
  	}
  return (
      <table id="form-food-items" className="table table-borderless table-hover">
        <thead>
          <tr>
            <th>Item</th>
            <th>Title</th>
            <th className="text-start">Price</th>
            <th>Quantity</th>
            <th className="text-start">T. Price</th>
            <th>
              <button
                type="button"
                className="btn btn-sm btn-secondary"
                onClick={onRowAdd}
              >
                + Add
              </button>
            </th>
          </tr>
        </thead>
		<tbody>
			{fields.map((f, index) => {
				return (
					<tr key={f.id}>
						<td>
							<CustomSelect
							
							opts={opts} 
							{...register(`items.${index}.id`)}
							>
							</CustomSelect>
						</td>
						<td>
							<span>{getValues(`items.${index}.title`)}</span>
						</td>
						<td>
							<span>{"$" + getValues(`items.${index}.price`)}</span>
						</td>
						<td>
							0
						</td>
						<td>
							<span>{"$" + getValues(`items.${index}.totalPrice`)}</span>
						</td>
						<td>
							<button type="button" className="btn btn-danger" onClick={onRowDelete}>X</button>
						</td>
					</tr>
				)
			})}
		</tbody>
		<tfoot>

		</tfoot>
      </table>
  );
}
