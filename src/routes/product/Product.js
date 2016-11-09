import React, { PropTypes } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import RaisedButton from 'material-ui/RaisedButton';
import cx from 'classnames';
import Layout from '../../components/Layout';
import s from './Product.css';

function Product({ product }) {
  let productRating;
  if (product.rating) {
    productRating = (
      <FormattedMessage
        id="product.rating"
        description="Product rating"
        defaultMessage={'Rating: {rating}'}
        values={{
          rating: product.rating,
        }}
        tagName="p"
      />
    );
  }
  return (
    <Layout className={s.container}>
      <div className={s.root}>
        <div className={s.container}>
          <div className={s['mdl-grid']}>
            <div className={cx(s['mdl-cell'], s['text-center'])}>
              <img src={product.image} alt="" />
            </div>
            <div className={s['mdl-cell']}>
              <h1>{product.name}</h1>
              {productRating}
              <FormattedMessage
                id="product.price"
                description="Product price"
                defaultMessage={'Price: {price}'}
                values={{
                  price: product.price,
                }}
                tagName="p"
              />
              <RaisedButton
                label={
                  <FormattedMessage
                    id="button.buy"
                    description="Buy button"
                    defaultMessage={'Buy'}
                  />
                        }
                primary
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default injectIntl(withStyles(s)(Product));
