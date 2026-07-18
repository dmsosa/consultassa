import { useFormState } from "react-hook-form"

export default function FormLoader(props) {
  const { control } = props
  const { isLoading } = useFormState({ control })
  return isLoading == false || <div className="loader"></div>
}