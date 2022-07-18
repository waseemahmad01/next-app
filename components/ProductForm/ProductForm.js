import React from 'react';

import classNames from 'classnames';

import classes from './styles.module.css';

const ProductForm = () => {
  return (
    <div className={classes.formContainer}>
      <h2 className={(classNames('medium'), classes.formTitle)}>
        Product details
      </h2>
      <form action='' className={classes.form}>
        <div className={classes.input_group}>
          <h4>Name</h4>
          <input type='text' placeholder='Enter name..' />
        </div>
        <div className={classes.input_group}>
          <h4>price</h4>
          <input type='text' placeholder='Enter price ($)..' />
        </div>
        <div className={classes.input_group}>
          <h4>Quantity</h4>
          <input type='number' placeholder='Enter quantity' />
        </div>
        <div className={classes.input_group}>
          <h4>Description</h4>
          <textarea placeholder='Enter description'></textarea>
        </div>

        <label htmlFor='file-input' className={classes.fileInput}>
          Upload image
        </label>
        <input
          type='file'
          name=''
          id='file-input'
          style={{ display: 'none' }}
        />

        <button type='submit' className={classes.submit}>
          Add product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
