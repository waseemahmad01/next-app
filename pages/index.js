import { Fragment } from 'react';

import classNames from 'classnames';

import Product from '../components/Product/Product';

import classes from '../styles/index.module.css';

const HomePage = () => {
  return (
    <Fragment>
      <h1 className={classNames('medium', classes.title)}>Products</h1>
      <div className={classes.grid}>
        {Array.from({ length: 5 }, (_, i) => i).map(i => (
          <div className={classes.grid_item} key={i}>
            <Product />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default HomePage;

// getStaticProps(){}

// getServerSideProps(context){} ====> has access to req and res object
