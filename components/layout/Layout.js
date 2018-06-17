import { Fragment } from 'react';
import Header from './header';
import Footer from './footer';

export default ({ current, children }) => (
  <Fragment>
    <Header current={current} />
      {children}
    <Footer />
  </Fragment>
);
