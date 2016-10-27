import React from 'react';
import Layout from '../../components/Layout';
import s from './Home.css';

const title = 'Home';

class HomePage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1>Welcome!</h1>
      </Layout>
    );
  }

}

export default HomePage;
