import { Link, NavLink } from "react-router-dom";


const Navbar = () =>{

    return (
      <div className="navbar navbar-dark bg-dark">
        <div className="container">
            <NavLink className="btn btn-outline-primary" to="/">Inicio</NavLink>
            <NavLink className="btn btn-outline-primary" to="/Contacto">Contacto</NavLink>
            <NavLink className="btn btn-outline-primary" to="/Blog">Blog</NavLink>
        </div>
      </div>
    );

}

export default Navbar;