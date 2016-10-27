import React from 'react';
import history from '../../core/history';
import Link from '../Link';
import s from './Navigation.css';

function Navigation() {
  const path = history.getCurrentLocation().pathname;
  const linkClass = href => `${s.link}${path === href ? ` ${s.active}` : ''}`;
  return (
        <nav className={s.nav}>
            <Link className={linkClass('/')} to="/">
                Home
            </Link>
            <Link className={linkClass('/catalog')} to="/catalog">
                Catalog
            </Link>
            <Link className={linkClass('/404')} to="/404">
                About us
            </Link>
            <Link className={linkClass('/basket')} to="/basket">
                <i className={`material-icons ${s['material-icons']}`}>shopping_cart</i>
                  (<span className="cart-total-item">0</span>)&nbsp;
                  <span className="cart-total-price">$0.00</span>
            </Link>
        </nav>
  );
}


export default Navigation;
