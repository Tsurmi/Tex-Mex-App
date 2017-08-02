  import React from 'react';
  import {Link} from 'react-router';

  const NavBar = () => {
    return (
      <div className="navBar">
        <ul className="navLinks">
          <li> <Link className="Link" to="/"> Home </Link> </li>
          <li> <Link className="Link" to="/Menu"> Menu </Link> </li>
          <li> <Link className="Link" to="/About"> About </Link> </li>
          <li> <Link className="Link" to="/Contacts"> Contacts </Link> </li>
        </ul>
      </div>
    )
  }

  export default NavBar;
