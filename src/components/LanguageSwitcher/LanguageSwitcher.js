/* eslint-disable no-shadow */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import { setLocale } from '../../actions/intl';
import s from './LanguageSwitcher.css';

function LanguageSwitcher({ currentLocale, availableLocales, setLocale }) {
  const isSelected = (locale) => locale === currentLocale;
  const localeDict = {
    'en-US': 'EN',
    'nb-NO': 'NO',
    'zh-CN': '华语',
  };
  const localeName = (locale) => localeDict[locale] || locale;
  return (
    <div className={s['lang-switcher']}>
      {availableLocales.map(locale => (
        <span key={locale}>
          {isSelected(locale) ? (
            <span
              className={cx(s['lang-link'], s['lang-link-active'])}
            >{localeName(locale)}</span>
          ) : (
            <a
              href={`?lang=${locale}`}
              className={s['lang-link']}
              onClick={(e) => {
                setLocale({ locale });
                e.preventDefault();
              }}
            >{localeName(locale)}</a>
          )}
          {' '}
        </span>
      ))}
    </div>
  );
}

LanguageSwitcher.propTypes = {
  currentLocale: PropTypes.string.isRequired,
  availableLocales: PropTypes.arrayOf(PropTypes.string).isRequired,
  setLocale: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  availableLocales: state.runtime.availableLocales,
  currentLocale: state.intl.locale,
});

const mapDispatch = {
  setLocale,
};

export default connect(mapState, mapDispatch)(withStyles(s)(LanguageSwitcher));
