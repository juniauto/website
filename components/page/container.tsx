import React, { Props } from 'react';
import Favicons from './favicons';
import StyleSheets from './stylesheets';
import Header from './header';
import Footer from './footer';

const PageContainer = (props: Props<any>) => (
    <div className="page">
      <Favicons />
      <StyleSheets />
      <Header />

      {props.children}

      <Footer />
    </div>
);

export default PageContainer;
