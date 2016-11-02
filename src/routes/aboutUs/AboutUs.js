import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import s from './AboutUs.css';

function AboutUs({ title }) {
  return (
    <Layout>
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
        </div>
      </div>
    </Layout>
  );
}

AboutUs.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(s)(AboutUs);
