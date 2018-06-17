import Link from 'next/link';
import Layout from '../components/layout';

export default () => (
  <Layout current='home'>
    <h1>Welcome to my workshops</h1>
    <ul>
      <li>
        <Link prefetch href='/about'><a>About</a></Link>
      </li>
    </ul>
  </Layout>
);
