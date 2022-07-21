import classNames from 'classnames';
import classes from './style.module.css';

import { MongoClient, ObjectId } from 'mongodb';
import Product from '../../components/Product/Product';

const ProductDetails = data => {
  return (
    <div>
      <h1 className={classNames('medium', classes.title)}>Product Details</h1>
      <div
        style={{ maxWidth: '550px', marginInline: 'auto', marginTop: '2rem' }}
      >
        <Product data={data.data} />
      </div>
    </div>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://waseem:SPaC0fzbq2k8ZYqe@inventory.pppug.mongodb.net/?retryWrites=true&w=majority'
  );
  const db = client.db();
  const products = db.collection('products');
  const data = await products.find().toArray();
  client.close();
  return {
    paths: data
      .slice(0, 3)
      .map(e => ({ params: { productId: e._id.toString() } })),
    fallback: 'blocking',
  };
};

export const getStaticProps = async context => {
  const productId = context.params.productId;

  const client = await MongoClient.connect(
    'mongodb+srv://waseem:SPaC0fzbq2k8ZYqe@inventory.pppug.mongodb.net/?retryWrites=true&w=majority'
  );
  const db = client.db();
  const products = db.collection('products');
  const data = await products.findOne({ _id: ObjectId(productId) });
  client.close();
  return {
    props: {
      data: {
        ...data,
        _id: data._id.toString(),
      },
    },
    revalidate: 1,
  };
};
