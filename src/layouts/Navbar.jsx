import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img src={logo} className="img-fluid w-25" alt="logo"/>
        {/* <a className="navbar-brand" href="#">Result Analysis</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">Home</Link>
              {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
            </li>
            <li className="nav-item">
              <Link to="/students" className="nav-link">Students</Link>
              {/* <a className="nav-link" href="#">Students</a> */}
            </li>
            <li className="nav-item">
              <Link to="/teachers" className="nav-link">Teachers</Link>
              {/* <a className="nav-link" href="#">Teachers</a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;