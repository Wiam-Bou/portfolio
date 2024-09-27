import React from 'react';
import './Navbar.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import { FaAddressBook } from 'react-icons/fa';

function Navbar() {
  return (
    <div className='navbar'>
      <img src={logo} alt="logo" />
      <Link className='nav-menu'>Accueil</Link>
      <Link className='nav-menu'>Compétences</Link>
      <Link className='nav-menu'>A propos</Link>
      <Link className='nav-menu'>Portfolio</Link>

      <button className="nav-connect">
        <FaAddressBook className='contact-icon' />
        Me contacter
      </button>
    </div>
  );
}

export default Navbar;