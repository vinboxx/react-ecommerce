import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

const messages = defineMessages({
  home: {
    id: 'navigation.home',
    defaultMessage: 'Home',
    description: 'Home link in header',
  },
  catalog: {
    id: 'navigation.catalog',
    defaultMessage: 'catalog',
    description: 'catalog link in header',
  },
  aboutus: {
    id: 'navigation.aboutus',
    defaultMessage: 'About us',
    description: 'About us link in header',
  },
});

function Navigation() {
  return (
    <nav className={s.nav}>
      <Link className={s.link} to="/">
        <FormattedMessage {...messages.home} />
      </Link>
      <Link className={s.link} to="/catalog">
        <FormattedMessage {...messages.catalog} />
      </Link>
      <Link className={s.link} to="/about-us">
        <FormattedMessage {...messages.aboutus} />
      </Link>
      <Link className={s.link} to="/basket">
        <i className={cx('material-icons', s['material-icons'])}>shopping_cart</i>
        (<span className="cart-total-item">0</span>)&nbsp;
        <span className="cart-total-price">$0.00</span>
      </Link>
    </nav>
  );
}

export default withStyles(s)(Navigation);
