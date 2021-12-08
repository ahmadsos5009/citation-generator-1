import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Header: React.FC<{ siteTitle: string }> = ({ siteTitle }) => (
  <MainHeader>
    <Wrapper>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </Wrapper>
  </MainHeader>
);

const MainHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

export default Header;
