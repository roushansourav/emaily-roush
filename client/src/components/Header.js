import React from 'react';
import {Link} from 'react-router-dom';

const Header = function(){
  return (
    <nav>
    <div className="nav-wrapper">
      <Link to='/' className="brand-logo">Emaily</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to='/auth/google'>Login With Google</Link></li>
      </ul>
    </div>
  </nav>
  )
}

export default Header;