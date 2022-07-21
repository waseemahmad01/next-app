import { Fragment } from 'react';
import { MongoClient } from 'mongodb';

import classNames from 'classnames';

import Product from '../components/Product/Product';

import classes from '../styles/index.module.css';

const HomePage = ({ products }) => {
  return (
    <Fragment>
      <h1 className={classNames('medium', classes.title)}>Products</h1>
      <div className={classes.grid}>
        {products.map((product, index) => (
          <div className={classes.grid_item} key={index}>
            <Product data={product} />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://waseem:SPaC0fzbq2k8ZYqe@inventory.pppug.mongodb.net/?retryWrites=true&w=majority'
  );
  const db = client.db();
  const products = db.collection('products');
  const data = await products.find().toArray();

  const productsList = data.map(product => ({
    ...product,
    _id: product._id.toString(),
  }));

  client.close();

  return {
    props: {
      products: productsList,
    },
    revalidate: 1,
  };
};

// getStaticProps(){}

// getServerSideProps(context){} ====> has access to req and res object
