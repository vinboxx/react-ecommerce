import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Layout from '../../components/Layout';
import FilterableProductTable from '../../components/FilterableProductTable';
import catalogData from '../../public/catalog-data';
import s from './Catalog.css';

function Catalog() {
  return (
    <Layout className={s.container}>
      <FilterableProductTable products={catalogData} />
    </Layout>
  );
}

export default withStyles(s)(Catalog);
