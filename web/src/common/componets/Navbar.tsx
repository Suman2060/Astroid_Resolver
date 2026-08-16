import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="flex gap-4">
        <Link to="/library">
          Library
        </Link>

        <Link to="/collections">
          Collections
        </Link>

        <Link to="/submit">
          Form
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;