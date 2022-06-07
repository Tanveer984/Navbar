import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo">Logo</div>
      <div>
        <Link to={"/"}>Services</Link>
        <Link to={"/projects"}>projects</Link>
        <Link to={"/About"}>About</Link>
      </div>
      <button>Connect</button>
    </div>
  );
}
export default Navbar;
