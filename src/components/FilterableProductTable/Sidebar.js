import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  checkbox: {
    marginBottom: 16,
  },
};

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  getActiveProduct(filters) {
    if (!filters) {
      return this.props.products;
    }
    const activeProducts = [];
    this.props.products.forEach((product) => {
      const productFilters = new Set(product.filters);
      const intersection = new Set([...filters].filter(x => productFilters.has(x)));
      if (filters && intersection.size === 0) {
        return;
      }
      activeProducts.push(product);
    });
    return activeProducts;
  }

  handleChange(event, checked) {
    this.props.onUserInput(event.target.id, checked);
  }

  render() {
    const handleChange = this.handleChange;
    const filters = this.props.filters;
    const activeProducts = this.props.activeFilters ? this.getActiveProduct(this.props.activeFilters.split(',')) : this.props.products;
    let activeFilters = activeProducts.map((item) =>
         item.filters
      );
    // Flatten array
    activeFilters = new Set([].concat(...activeFilters));

    const chkBoxList = Object.keys(filters).map((key) => {
      const filter = filters[key];
      const enable = (activeFilters.size && activeFilters.has(filter.id));

      return (
        <Checkbox
          key={filter.name}
          id={filter.id}
          label={`${filter.name} (${filter.count})`}
          style={styles.checkbox}
          disabled={!enable}
          onCheck={handleChange}
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

Sidebar.propTypes = {
  products: PropTypes.array.isRequired,
  onUserInput: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  activeFilters: PropTypes.string.isRequired,
};

export default Sidebar;
