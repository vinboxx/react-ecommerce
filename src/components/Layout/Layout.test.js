/* eslint-env mocha */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { indigo500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from '../App';
import Layout from './Layout';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
  runtime: {
    availableLocales: ['en-US'],
  },
  intl: {
    locale: 'en-US',
  },
};

describe('Layout', () => {
  it('renders children correctly', () => {

    // This replaces the textColor value on the palette
    // and then update the keys for each component that depends on it.
    // More on Colors: http://www.material-ui.com/#/customization/colors
    const muiTheme = getMuiTheme({
      appBar: {
        height: 128,
        color: indigo500,
      },
    });

    const store = mockStore(initialState);

    const wrapper = render(
      <MuiThemeProvider muiTheme={muiTheme}>
        <App context={{ insertCss: () => {}, store }}>
          <Layout>
            <div className="child" />
          </Layout>
        </App>
      </MuiThemeProvider>
    );
    expect(wrapper.find('div.child').length).to.eq(1);
  });

});
