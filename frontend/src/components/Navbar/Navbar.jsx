import { Link } from "react-router-dom";
import NavItem from "../NavItem";
import SourceCodeLink from "../SourceCodeLink";
import DropdownMenu from "./DropdownMenu";

function Navbar() {

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          conduit
        </Link>

        <SourceCodeLink left />

        <ul className="nav navbar-nav pull-xs-right">
          <NavItem text="Home" icon="ion-compose" url="/" />

            <>
              <NavItem text="New Article" icon="ion-compose" url="/editor" />
              <DropdownMenu />
            </>

        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
