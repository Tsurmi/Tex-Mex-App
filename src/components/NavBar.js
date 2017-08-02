  import React from 'react';
  import {Link} from 'react-router';

  const NavBar = () => {
    return (
      <div>
        <ul className="NavBar">
          <li> <Link to="/"> Home </Link> </li>
          <li> <Link to="/Menu"> Menu </Link> </li>
          <li> <Link to="/About"> About </Link> </li>
          <li> <Link to="/Contacts"> Contacts </Link> </li>
        </ul>
      </div>
    )
  }

  export default NavBar;
