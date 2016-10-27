import React from 'react';
import Layout from '../../components/Layout';
// import s from './Product.css';

class ProductPage extends React.Component {

  componentDidMount() {
    document.title = 'Product';
  }

  render() {
    return (
            <Layout>
                Product page
            </Layout>
        );
  }

}

export default ProductPage;
