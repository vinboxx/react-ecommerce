import React from 'react';
import Basket from './Basket';

const title = 'Basket';

export default {

  path: '/basket',

  action() {
    return {
      title,
      component: <Basket title={title} />,
    };
  },

};
