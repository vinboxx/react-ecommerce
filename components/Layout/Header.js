import React from 'react';
import Navigation from './Navigation';
import s from './Header.css';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

function Header() {
  const LanguageSwitcher = () => (
        <div className={s['mdl-textfield']}>
            <TextField
              underlineShow
              id="search-box"
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

export default Header;
