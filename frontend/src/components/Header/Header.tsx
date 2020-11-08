import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

import cart from '../../icons/cart.svg';
import human from '../../icons/human.svg';
import search from '../../icons/search.svg';
import cursor from '../../icons/Cursor.svg';

const Header: React.FC = () => {
  const [inputOn, setinputOn] = useState<boolean>(false);
  return (
    <div className='header-container'>
      <header>
        <div className='logo-name'>
          <Link to={`/`}>
            <h1>greenbir</h1>
          </Link>
        </div>
        <div className='nav-links'>
          <nav>
            <ul>
              <NavLink
                to='/'
                exact
                activeClassName='active'
                className='nav-link'
              >
                <li> home</li>
              </NavLink>
              <NavLink
                to={`/shop`}
                exact
                activeClassName='active'
                className='nav-link'
              >
                <li>shop</li>
              </NavLink>
              <NavLink
                to={`/blog`}
                exact
                activeClassName='active'
                className='nav-link'
              >
                <li>blog</li>
              </NavLink>
              <NavLink
                to={`/contect`}
                exact
                activeClassName='active'
                className='nav-link'
              >
                <li>contect</li>
              </NavLink>
            </ul>
          </nav>
        </div>
        <div className='header-side'>
          <div className='search-container'>
            <img src={search} alt='search-icon' className='searchicon' />
            <img
              src={cursor}
              alt='search-icon-cursor'
              className={inputOn ? 'cursor-visiblity' : 'cursoricon'}
            />
            <div onClick={() => setinputOn(true)}>
              <input
                type='text'
                name='search'
                aria-label='search'
                placeholder='Search Birds...'
              />
            </div>
          </div>
          <div className='card-container'>
            <img src={cart} alt='cart' />
            <p> cart</p>
          </div>
          <div className='sign-container'>
            <img src={human} alt='people' />
            <p>sign in</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
