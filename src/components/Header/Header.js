import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import s from './Header.css';
import Navigation from '../Navigation';
import LanguageSwitcher from '../LanguageSwitcher';

function Header() {
  const styles = {
    input: {
      color: '#fff',
    },
  };

  const appTitle = (
    <FormattedMessage
      id="app title"
      defaultMessage="React Simple Cart"
      description="App title"
    />
  );

  return (
    <AppBar
      showMenuIconButton={false}
      title={appTitle}
    >
      <div className={s['mdl-layout__header-row']}>
        <div className={s['mdl-textfield']}>
          <TextField
            underlineShow
            id="search-box"
            inputStyle={styles.input}
          />
          <i className={`material-icons ${s['material-icons']}`}>search</i>
          <LanguageSwitcher />
        </div>
        <Navigation />
      </div>
    </AppBar>
  );
}

export default injectIntl(withStyles(s)(Header));
