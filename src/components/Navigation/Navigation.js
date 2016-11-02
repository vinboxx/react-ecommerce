import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

function Navigation() {
  return (
    <nav className={s.nav}>
      <Link className={s.link} to="/">
            Home
      </Link>
      <Link className={s.link} to="/catalog">
            Catalog
      </Link>
      <Link className={s.link} to="/about-us">
            About us
      </Link>
      <Link className={s.link} to="/basket">
        <i className={cx('material-icons', s['material-icons'])}>shopping_cart</i>
        <span className="cart-total-item">0</span>)&nbsp;
        <span className="cart-total-price">$0.00</span>
      </Link>
    </nav>
  );
}

export default withStyles(s)(Navigation);
