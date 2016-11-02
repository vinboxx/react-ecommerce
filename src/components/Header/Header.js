import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import s from './Header.css';
import Navigation from '../Navigation';

function Header() {
  const styles = {
    input: {
      color: '#fff',
    },
  };

  const LanguageSwitcher = () => (
    <div className={s['mdl-textfield']}>
      <TextField
        underlineShow
        id="search-box"
        inputStyle={styles.input}
      />
      <i className={`material-icons ${s['material-icons']}`}>search</i>
      <div className={s['lang-switcher']}>
        <a className={`${s['lang-link']} ${s['lang-link-active']}`}>EN</a>
        <a className={s['lang-link']}>NO</a>
        <a className={s['lang-link']}>华语</a>
      </div>
    </div>
    );

  return (
    <AppBar
      showMenuIconButton={false}
      title="Title"
    >
      <div className={s['mdl-layout__header-row']}>
        <LanguageSwitcher />
        <Navigation />
      </div>
    </AppBar>
  );
}

export default withStyles(s)(Header);
