import { useFieldArray, useForm, useFormContext, useFormState } from "react-hook-form";
import CustomSelect from "../Control/CustomSelect";
import { useEffect, useState } from "react";
import { getFoodItems } from "../../../data/food";

export default function Items() {
  const [foodList, setFoodList] = useState([])
  const [foodOptions, setFoodOptions] = useState([])

  useEffect(() => {
    const tempList = getFoodItems()
    const tempOptions = tempList.map((x) => ({
      value: x.foodId,
      text: x.name,
    }))
    setFoodList(tempList)
    setFoodOptions([{ value: 0, text: "Select" }, ...tempOptions])
  }, [])

  const { register, getValues, setValue, trigger } = useFormContext();
  const { fields, append, remove } = useFieldArray({
	name: "foodItems"
  });
  
  const onRowAdd = (e) => {

  }

  const onRowDelete = (e) => {

  }

  return (
      <table id="form-food-items" className="table table-borderless table-hover">
        <thead>
          <tr>
            <th>Item</th>
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
							
							opts={foodOptions} 
							{...register(`foodItems.${index}.id`)}
							>
							</CustomSelect>
						</td>
						<td>
							<span>{"$" + getValues(`foodItems.${index}.price`)}</span>
						</td>
						<td>
							0
						</td>
						<td>
							<span>{"$" + getValues(`foodItems.${index}.totalPrice`)}</span>
						</td>
						<td>
							<button className="btn btn-danger" onClick={onRowDelete}>X</button>
						</td>
					</tr>
				)
			})}
		</tbody>
      </table>
  );
}
