import React from 'react';
import { injectIntl, FormattedMessage, FormattedNumber } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { GridList, GridTile } from 'material-ui/GridList';
// import IconButton from 'material-ui/IconButton';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import Layout from '../../components/Layout';
import s from './Catalog.css';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
    width: '100%'
  },
  checkbox: {
    marginBottom: 16,
  },
  buyButton: {
    marginRight: 16,
  },
  matching: {
    marginTop: 0,
    width: '100%',
  },
};

const tilesData = [
  {
    id: 1,
    name: 'Iphone 6S',
    description: 'New phone from Apple',
    price: 10,
    image: 'img/product-01.png',
    filters: ['brand:apple:Apple'],
    rating: 4.4
  },
  {
    id: 2,
    name: 'Iphone 6',
    description: 'Model 2014',
    price: 10,
    image: 'img/product-02.png',
    filters: ['brand:apple:Apple']
  },
  {
    id: 3,
    name: 'Some element3',
    description: 'Some very awesome description',
    price: 10,
    image: 'img/product-03.png',
    filters: ['feature:wireless-charging:Wireless Charging']
  },
  {
    id: 4,
    name: 'Galaxy S7',
    description: 'New phone from Samsung on Android',
    price: 10,
    image: 'img/product-04.png',
    filters: ['brand:samsung:Samsung', 'feature:4g:4G']
  }
];

class ProductResultText extends React.Component {
  render() {
    return (
      <p style={styles.matching}>
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

class ProductRow extends React.Component {
  render() {
    let tile = this.props.product;
    return (
      <GridTile
        key={tile.image}
        title={tile.name}
        subtitle={<span>{tile.description}</span>}
        actionIcon={<RaisedButton label="Buy" primary={true} style={styles.buyButton} />}
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

class ProductTable extends React.Component {
  render() {
    let rows = [];
    let self = this;
    let productCount = 0;
    let activeFilters = new Set(this.props.activeFilters.split(','));

    this.props.products.forEach(function(product) {
      let productFilters = new Set(product.filters);
      let intersection = new Set([...activeFilters].filter(x => productFilters.has(x)));
      if (self.props.activeFilters && intersection.size == 0) {
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

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(filterId, event, checked) {
    this.props.onUserInput(filterId, checked);
  }

  getActiveProduct(products, filters) {
    if (!filters) {
      return products;
    }
    let activeProducts = [];
    products.forEach(function(product) {
      let productFilters = new Set(product.filters);
      let intersection = new Set([...filters].filter(x => productFilters.has(x)));
      if (filters && intersection.size == 0) {
        return;
      }
      activeProducts.push(product);
    });
    return activeProducts;
  }

  render() {
    let handleChange = this.handleChange;
    let filters = this.props.filters;
    let self = this;
    let activeProducts = this.props.activeFilters ? this.getActiveProduct(this.props.products, this.props.activeFilters.split(',')) : this.props.products;
    let activeFilters = activeProducts.map(function(item) {
      return item.filters;
    });
    activeFilters = new Set([].concat.apply([], activeFilters));

    let chkBoxList = Object.keys(filters).map(function (key) {

      let filter = filters[key];
      let enable = (activeFilters.size && activeFilters.has(filter.id)) ? true : false;

      return (
        <Checkbox
          key={filter.name}
          id={filter.id}
          label={filter.name + ' (' + filter.count + ')'}
          style={styles.checkbox}
          disabled={!enable}
          onCheck={handleChange.bind(self, filter.id)}
        />
      );
    });

    return (
      <form>
        {chkBoxList}
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeFilters: ''
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(filter, checked) {
    // Convert to Set
    let activeFilters = this.state.activeFilters ? new Set(this.state.activeFilters.split(',')) : new Set();
    if (checked) {
      activeFilters.add(filter);
    } else {
      activeFilters.delete(filter);
    }
    // Convert back to string and update state
    this.setState({
      activeFilters: Array.from(activeFilters).join(',')
    });
  }

  /**
   * iterate through all products and extract filter information
   */
  processFilters() {
    this.mergedFilters = {};

    this.props.products.forEach((product) => {
        this.mergeFilters(product);
    });

    return this.mergedFilters;
  }

  /**
   * extract unique filters and counts from product
   */
  mergeFilters(product) {
    product.filters.forEach((filterId) => {
        /** filter format "category:urlName:displayName" */
        let parts = filterId.split(':');

        /**
         * if filter does not exist, create filter object
         * else, just add one to the counter
         */
        if (this.mergedFilters[filterId] === undefined) {
            this.mergedFilters[filterId] = {
                id: filterId,
                category: parts[0],
                urlName: parts[1],
                name: parts[2],
                count: 1,
                disabled: false
            };
        } else {
            this.mergedFilters[filterId].count++;
        }
    });
  }

  render() {

    let mergedFilters = this.processFilters();

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

function Catalog() {
  return (
    <Layout className={s.container}>
      <FilterableProductTable products={tilesData} />
    </Layout>
  );
}

export default injectIntl(withStyles(s)(Catalog));
