import Link from 'next/link';

export default () => (
  <div>
    <h1>Welcome!</h1>
    <p>This site will a confernce</p>
    <p>
      <Link href="/about">About</Link>
    </p>
    <p>
      <Link href="/contact">Contact</Link>
    </p>
  </div>
);
