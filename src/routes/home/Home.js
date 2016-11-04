import React from 'react';
import { FormattedMessage } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import s from './Home.css';

function Home() {
  return (
    <Layout className={s.container}>
      <div className={s.root}>
        <div className={s.container}>
          {/* multiple value */}
          <p>
            Translate <strong className={s['text-muted']}>Hello, {'{txt1} {txt2}'}!</strong>:
            <br />
            <FormattedMessage
              id="hello greet"
              description="Test text in home page"
              defaultMessage={'Hello, {txt1} {txt2}!'}
              values={{ txt1: 'Jane', txt2: 'Doe' }}
            />
          </p>
          {/* single value */}
          <p>
            Translate <strong className={s['text-muted']}>Well done {'{name}'}</strong>:
            <br />
            <FormattedMessage
              id="well done"
              description="Test text in home page"
              defaultMessage={'Well done {name}'}
              values={{ name: 'Tony' }}
            />
          </p>
          {/* No translate text */}
          <p>
            Translate <strong className={s['text-muted']}>Good bye (fallback to EN)</strong>:
            <br />
            <FormattedMessage
              id="good bye"
              description="Test text in home page"
              defaultMessage={'bye bye'}
            />
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default withStyles(s)(Home);
