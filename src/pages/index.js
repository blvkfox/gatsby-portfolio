import * as React from 'react';
import Layout from './../components/layout';
import Hero from './../components/hero';
import Portfolio from './../components/portfolio';
import Services from './../components/services';
import About from './../components/about';
import Contact from './../components/contact';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
