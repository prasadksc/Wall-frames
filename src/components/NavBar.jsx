import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import SearchBar from './SearchBar';


const NavBar = ({value,onChange}) => {

  const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RoluJqLo6UUcbkKnUmSWa8pNRhlq9VKOjw&usqp=CAU"

    return ( 
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src={img} className="navbar_logo" alt="wall frame logo" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/"><i className="fa fa-fw fa-home"></i>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products"><i className="fa fa-product-hunt"></i> Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link login" to="/login"><i className="fa fa-fw fa-user"></i>Login</NavLink>
          </li>
          </ul>
          <SearchBar value={value} onChange={onChange}/>
        </div>
      </div>
    </nav>
     );
}
 
export default NavBar;

