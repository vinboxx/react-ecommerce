import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Sidebar from './Sidebar';
import ProductTable from './ProductTable';
import s from './FilterableProductTable.css';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilters: '',
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(filter, checked) {
    // Convert to Set
    const activeFilters = this.state.activeFilters ? new Set(this.state.activeFilters.split(',')) : new Set();
    if (checked) {
      activeFilters.add(filter);
    } else {
      activeFilters.delete(filter);
    }
    // Convert back to string and update state
    this.setState({
      activeFilters: Array.from(activeFilters).join(','),
    });
  }

  // iterate through all products and extract filter information
  processFilters() {
    this.mergedFilters = {};

    this.props.products.forEach((product) => {
      this.mergeFilters(product);
    });

    return this.mergedFilters;
  }

  // extract unique filters and counts from product
  mergeFilters(product) {
    product.filters.forEach((filterId) => {
      // filter format "category:urlName:displayName"
      const parts = filterId.split(':');

      // if filter does not exist, create filter object
      // else, just add one to the counter
      if (this.mergedFilters[filterId] === undefined) {
        this.mergedFilters[filterId] = {
          id: filterId,
          category: parts[0],
          urlName: parts[1],
          name: parts[2],
          count: 1,
          disabled: false,
        };
      } else {
        this.mergedFilters[filterId].count += 1;
      }
    });
  }

  render() {
    const mergedFilters = this.processFilters();

    return (
      <div className={s.row}>
        <div className={s['col-md-2']}>
          <Sidebar
            products={this.props.products}
            filters={mergedFilters}
            activeFilters={this.state.activeFilters}
            onUserInput={this.handleUserInput}
          />
        </div>
        <div className={s['col-md-10']}>
          <ProductTable
            products={this.props.products}
            activeFilters={this.state.activeFilters}
          />
        </div>
      </div>
    );
  }
}

FilterableProductTable.propTypes = {
  products: PropTypes.array.isRequired,
};

export default withStyles(s)(FilterableProductTable);
