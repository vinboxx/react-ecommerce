import React from 'react';
import Layout from '../../components/Layout';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Checkbox from 'material-ui/Checkbox';
import s from './Catalog.css';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
  },
  checkbox: {
    marginBottom: 16,
  },
  matching: {
    marginTop: 0,
    width: '100%',
  },
};

const tilesData = [
  {
    img: 'img/product-00.png',
    title: 'Breakfast',
    author: 'jill111',
    featured: false,
  },
  {
    img: 'img/product-01.png',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'img/product-02.png',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'img/product-03.png',
    title: 'Morning',
    author: 'fancycrave1',
    featured: false,
  },
  {
    img: 'img/product-04.png',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'img/product-05.png',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'img/product-06.png',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'img/product-07.png',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
  {
    img: 'img/product-08.png',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
  {
    img: 'img/product-09.png',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

const Sidebar = () => (
    <div>
        <Checkbox
          label="Apple (2)"
          style={styles.checkbox}
        />
        <Checkbox
          label="Wireless Charging (1)"
          style={styles.checkbox}
        />
        <Checkbox
          label="Samsung (1)"
          style={styles.checkbox}
        />
        <Checkbox
          label="4G (1)"
          style={styles.checkbox}
        />
    </div>
);

const MainPanel = () => (
    <div style={styles.root}>
        <p style={styles.matching}>Matching Products: 10</p>
        <GridList
          cols={3}
          cellHeight={400}
          padding={5}
          style={styles.gridList}
        >
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              subtitle={<span>by <b>{tile.author}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              actionPosition="left"
              titlePosition="bottom"
              cols={tile.featured ? 2 : 1}
              rows={tile.featured ? 2 : 1}
            >
              <img src={tile.img} alt={tile.title} />
            </GridTile>
          ))}
        </GridList>
    </div>
);

class CatalogPage extends React.Component {

  componentDidMount() {
    document.title = 'Catalog';
  }

  render() {
    return (
            <Layout className={s.content}>
                <GridList
                  cols={12}
                  padding={5}
                  cellHeight={'100%'}
                  style={styles.gridList}
                >
                    <GridTile
                      key={0}
                      cols={2}
                      rows={1}
                    >
                        <Sidebar />
                    </GridTile>
                    <GridTile
                      key={1}
                      cols={10}
                      rows={1}
                    >
                        <MainPanel />
                    </GridTile>
                </GridList>
            </Layout>
        );
  }

}

export default CatalogPage;
