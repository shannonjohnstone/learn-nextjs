import Link from 'next/link';
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout';
import Session from '../components/session';

const Index = ({ schedule }) => (
  <Layout current='home'>
    <h1>NextConf Schedule Browser</h1>
    {schedule.map(sessionInfo => <Session {...sessionInfo} />)}
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:3001/schedule')
  const json = await res.json()
  return { schedule: json }
}

export default Index;
