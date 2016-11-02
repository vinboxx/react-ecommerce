import React from 'react';
import Home from './Home';

const title = 'Welcome!';

export default {

  path: '/',

  action() {
    return {
      title,
      component: <Home title={title} />,
    };
  },

};
