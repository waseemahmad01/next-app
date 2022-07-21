import { useState } from 'react';
import { useRouter } from 'next/router';

import classNames from 'classnames';

import classes from './styles.module.css';

const ProductForm = () => {
  const router = useRouter();
  const [data, setData] = useState({
    name: '',
    price: '',
    quantity: '',
    description: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    console.log(data);

    const url = 'https://earnest-crepe-777c06.netlify.app/api/products';

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log(res);
    router.push('/');
  };
  return (
    <div className={classes.formContainer}>
      <h2 className={(classNames('medium'), classes.formTitle)}>
        Product details
      </h2>
      <form action='' className={classes.form}>
        <div className={classes.input_group}>
          <h4>Name</h4>
          <input
            type='text'
            placeholder='Enter name..'
            value={data.name}
            name='name'
            onChange={handleChange}
          />
        </div>
        <div className={classes.input_group}>
          <h4>price</h4>
          <input
            type='text'
            placeholder='Enter price ($)..'
            value={data.price}
            name='price'
            onChange={handleChange}
          />
        </div>
        <div className={classes.input_group}>
          <h4>Quantity</h4>
          <input
            type='number'
            placeholder='Enter quantity'
            value={data.quantity}
            name='quantity'
            onChange={handleChange}
          />
        </div>
        <div className={classes.input_group}>
          <h4>Description</h4>
          <textarea
            placeholder='Enter description'
            value={data.description}
            name='description'
            onChange={handleChange}
          ></textarea>
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

        <button type='submit' onClick={handleSubmit} className={classes.submit}>
          Add product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
