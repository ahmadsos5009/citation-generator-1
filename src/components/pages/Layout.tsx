import * as React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

const Layout: React.FC = ({ children }) => (
  <Wrapper>
    <Header />
    <main>{children}</main>
    <Footer />
  </Wrapper>
);

const Wrapper = styled.div`
  height: 100%
`;

export default Layout;
