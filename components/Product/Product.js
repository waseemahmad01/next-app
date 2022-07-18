import classNames from 'classnames';
import React from 'react';

import classes from './product.module.css';

const Product = () => {
  return (
    <div className={classes.card}>
      <div className={classes.product_image}>
        <img
          src='https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
          alt=''
        />
      </div>
      <div className={classes.product_details}>
        <h3 className='bold'>Description</h3>
        <p className={classes.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          doloribus voluptatum neque aperiam illum delectus numquam provident
          vel id dolorum.
        </p>
        <div
          className={classNames(
            classes.options,
            'flex align-center space-between wrap'
          )}
        >
          <p>
            <span>Name: </span> Product name
          </p>
          <p>
            <span>In stock: </span> 100
          </p>

          <p>
            <span>Price: </span> $10.5
          </p>
        </div>
      </div>
      <div style={{ paddingInline: '30px' }}>
        <button className={classes.cart_button}>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
