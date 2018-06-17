import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

import Header from './header';
import Footer from './footer';

Router.onRouteChangeStart = url => {
  console.log(`Loading: ${url}`); // eslint-disable-line
  NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default ({ current, children, title = 'NextConf Schedule' }) => (
  <div id='root'>
    <Head>
      <title>{title}</title>
      <link rel="stylesheet" href="/static/nprogress.css" />
    </Head>
    <Header current={current} />
      <main>
        {children}
      </main>
    <Footer />
  </div>
);
