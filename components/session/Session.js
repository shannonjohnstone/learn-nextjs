import Link from 'next/link';
import Rating from '../rating'

const Session = ({ title, description, slug, rating = false }) => (
  <div className='Session'>
    {/* <h2><Link as={`/session-detail/${slug}?rating=4`} href={`/session-detail?slug=${slug}&rating=4`}><a>{title}</a></Link></h2> */}
    <h2><Link as={`/session-detail/${slug}?rating=4`} href={`/session-detail/${slug}&rating=4`}><a>{title}</a></Link></h2>
    <p>{description}</p>
    {rating && <Rating value={rating} />}
  </div>
);

export default Session;
