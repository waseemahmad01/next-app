import { Children, Fragment } from 'react';

import Link from 'next/link';

import classes from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div
          className='flex space-between align-center'
          style={{ height: '100%' }}
        >
          <h2>NOCTIS</h2>
          <ul className={classes.nav} role='list'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/products'>Add product</Link>
            </li>
          </ul>

          <button className='btn btn_primary'>Subscribe</button>
        </div>
      </header>
      <main className={classes.main_container}>{children}</main>
    </Fragment>
  );
};

export default Layout;
