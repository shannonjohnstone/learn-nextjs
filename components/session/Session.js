import Link from 'next/link';

const Session = ({ title, description, slug }) => (
  <div className='Session'>
    <h2><Link as={`/session-detail/${slug}`} href={`/session-detail?slug=${slug}`}><a>{title}</a></Link></h2>
    <p>{description}</p>
  </div>
);

export default Session;
