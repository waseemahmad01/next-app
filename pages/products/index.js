import { Fragment } from 'react';

import classNames from 'classnames';

import ProductForm from '../../components/ProductForm/ProductForm';

import classes from './style.module.css';

const Products = () => {
  return (
    <Fragment>
      <h1 className={classNames('medium', classes.title)}>Add product</h1>
      <div className={classes.formContainer}>
        <ProductForm />
      </div>
    </Fragment>
  );
};

export default Products;
