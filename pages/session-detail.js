import fetch from 'isomorphic-unfetch';
import Session from '../components/session';
import Layout from '../components/layout'

const SessionDetail = ({ session }) => (
  <Layout current='session-detail'>
    <Session {...session} />
  </Layout>
);

SessionDetail.getInitialProps = async ({ query }) => {
  const res = await fetch(`http://localhost:3001/schedule?slug=${query.slug}`)
  const session = await res.json()
  return { session: session[0] }
}
export default SessionDetail
