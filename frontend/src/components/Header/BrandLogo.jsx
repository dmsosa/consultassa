import { FaGamepad } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BrandLogo() {
	return (
		<Link to={"/"} className="logo link-primary">
			<FaGamepad className="fw-bold fs-2 m-0"></FaGamepad>
			<h5 className="fw-bold">Gametech</h5>
		</Link>
	)
}

