import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="position-fixed w-100 zind" style={{ top: "0" }}>
      <nav className="navbar bg-light px-5 py-2 d-flex justify-content-between ">
        <Link to="/" className="navbar-brand fw-1">
          <span>P</span>asts<span>PEPS</span>
        </Link>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about">About Us</Link>
        </div>
      </nav>
    </div>
  );
}
export default Header;
