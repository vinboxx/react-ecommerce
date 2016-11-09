import React from 'react';
import Product from './Product';
import catalogData from '../../public/catalog-data';

const title = 'Product';

export default {

  path: '/product',

  action() {
    return {
      title,
      component: <Product title={title} />,
    };
  },

};

export const detail = {

  path: '/product/:id',

  action({ params }) {
    const product = catalogData.find((p) =>
       p.id === parseInt(params.id, 10)
    );
    return {
      title,
      component: <Product title={title} product={product} />,
    };
  },

};
