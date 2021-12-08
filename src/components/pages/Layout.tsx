import * as React from 'react';

import styled from 'styled-components';
import Header from '../Header';

interface PageProps{
  pageContext: { id: string, title: string }
}

const Layout: React.FC<PageProps> = ({ pageContext, children }) => (
  <>
    <Header siteTitle={pageContext.title} />
    <Body>
      <main>{children}</main>
      <Footer>
        ©
        {' '}
        {new Date().getFullYear()}
        , Built with
        {' '}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </Footer>
    </Body>
  </>
);

const Body = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem
`;

const Footer = styled.footer`
  margin-top: 2rem;
`;

export default Layout;
