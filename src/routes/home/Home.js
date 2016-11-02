import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import s from './Home.css';

function Home({ title }) {
  return (
    <Layout className={s.container}>
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
        </div>
      </div>
    </Layout>
  );
}

Home.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(s)(Home);
