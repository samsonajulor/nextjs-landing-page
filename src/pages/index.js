import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import About from 'sections/about';
import Nxt from 'sections/nxt';
// import News from 'sections/news';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title='LANDING PAGE' />
          <Banner />
          <About />
          <Nxt />
          <div>sample</div>
          {/* <News/> */}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
