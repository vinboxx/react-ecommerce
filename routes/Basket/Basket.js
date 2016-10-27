import React from 'react';
import Layout from '../../components/Layout';
// import s from './Basket.css';

class BasketPage extends React.Component {

  componentDidMount() {
    document.title = 'Basket';
  }

  render() {
    return (
            <Layout>
                Basket page
            </Layout>
        );
  }

}

export default BasketPage;
