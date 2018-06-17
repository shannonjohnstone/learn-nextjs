import Link from 'next/link';
import Layout from '../components/layout';

export default () => (
  <Layout current='about' title='About us'>
    <h1>About</h1>
    <p>This site will confernce schedule...eventully</p>
    <p>
      <Link prefetch href='/contact'>
        <a>Get in touch</a>
      </Link>
    </p>
  </Layout>
);
