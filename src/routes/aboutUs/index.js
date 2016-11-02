import React from 'react';
import AboutUs from './AboutUs';

const title = 'About Us';

export default {

  path: '/about-us',

  action() {
    return {
      title,
      component: <AboutUs title={title} />,
    };
  },

};
