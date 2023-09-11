import React from 'react';
import { Link } from 'react-router-dom';

import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CabecalhoM() {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo da porto" className='logo' />
      </div>
      <nav>
        <Link to='/ajuda' className='links'>Ajuda</Link>
        <Link to='/' className='links'>Home</Link>
        <Link to='/sobre' className='links'>Sobre nós</Link>
      </nav>
      <div className='icon'>
        <Link to='/ajuda'><FontAwesomeIcon icon={faSearch} className='lupa' /></Link>
        <Link to='/login'><FontAwesomeIcon icon={faUserCircle} className='usuario' /></Link>
      </div>
    </header>
  );
}