import React, { PropTypes } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { GridTile } from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import Link from '../Link';

class ProductRow extends React.Component {
  render() {
    const tile = this.props.product;
    if (!tile) {
      return null;
    }
    return (
      <GridTile
        key={tile.image}
        title={<Link to={`/product/${tile.id}`}>{tile.name}</Link>}
        subtitle={<span>{tile.description}</span>}
        actionIcon={
          <RaisedButton
            label={
              <FormattedMessage
                id="button.buy"
                description="Buy button"
                defaultMessage={'Buy'}
              />
            }
            primary
            style={{
              marginRight: 16,
            }}
          />
        }
        actionPosition="right"
        titlePosition="bottom"
        cols={1}
        rows={1}
      >
        <img src={tile.image} alt={tile.name} />
      </GridTile>
    );
  }
}

ProductRow.propTypes = {
  product: PropTypes.object.isRequired,
};

export default injectIntl(ProductRow);
