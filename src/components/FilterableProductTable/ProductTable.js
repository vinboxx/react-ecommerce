import React, { PropTypes } from 'react';
import { GridList } from 'material-ui/GridList';
import ProductResultText from './ProductResultText';
import ProductRow from './ProductRow';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
    width: '100%',
  },
};

class ProductTable extends React.Component {
  render() {
    const rows = [];
    const self = this;
    let productCount = 0;
    const activeFilters = new Set(this.props.activeFilters.split(','));

    this.props.products.forEach((product) => {
      const productFilters = new Set(product.filters);
      const intersection = new Set([...activeFilters].filter(x => productFilters.has(x)));
      if (self.props.activeFilters && intersection.size === 0) {
        return;
      }
      productCount += 1;
      rows.push(<ProductRow product={product} key={product.name} />);
    });
    return (
      <div style={styles.root}>
        <ProductResultText productCount={productCount} />
        <GridList
          cols={3}
          cellHeight={400}
          padding={5}
          style={styles.gridList}
        >
          {rows}
        </GridList>
      </div>
    );
  }
}

ProductTable.propTypes = {
  products: PropTypes.array.isRequired,
  activeFilters: PropTypes.string.isRequired,
};

export default ProductTable;
