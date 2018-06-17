import fetch from 'isomorphic-unfetch';
import Session from '../components/session';
import Layout from '../components/layout'

const SessionDetail = ({ session, rating }) => (
  <Layout current='session-detail'>
    <Session {...session} rating={rating} />
  </Layout>
);

SessionDetail.getInitialProps = async ({ query }) => {
  const res = await fetch(`http://localhost:3001/schedule/${query.slug}`)
  const session = await res.json()
  return { session, rating: query.rating }
}
export default SessionDetail
