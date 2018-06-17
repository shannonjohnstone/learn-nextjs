import { Component } from 'react';
import Layout from '../components/layout';

export default class Error extends Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }
  render() {
    return (
      <Layout current='error'>
        <p>
          {
            this.props.statusCode ?
              `An error ${this.props.statusCode} occured on server` :
              'An error occured on client'
          }
        </p>
      </Layout>
    )
  }
}
