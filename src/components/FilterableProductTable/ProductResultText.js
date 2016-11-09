import React, { PropTypes } from 'react';
import { injectIntl, FormattedMessage, FormattedNumber } from 'react-intl';

class ProductResultText extends React.Component {
  render() {
    if (!this.props.productCount) {
      return null;
    }
    return (
      <p
        style={{
          marginTop: 0,
          width: '100%',
        }}
      >
        <FormattedMessage
          id="matching products"
          description="Result text after filter product"
          defaultMessage={`
              {productCount, plural,
                  =0 {No matching products}
                  one {{formattedProductCount} matching product}
                  other {{formattedProductCount} matching products}
              }
          `}
          values={{
            productCount: this.props.productCount,
            formattedProductCount: (
              <FormattedNumber value={this.props.productCount} />
              ),
          }}
        />
      </p>
    );
  }
}

ProductResultText.propTypes = {
  productCount: PropTypes.number.isRequired,
};

export default injectIntl(ProductResultText);
