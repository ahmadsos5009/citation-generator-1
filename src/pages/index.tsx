import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import styled from 'styled-components';
import Seo from '../components/Seo';

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={['auto', 'webp', 'avif']}
      alt="A Gatsby astronaut"
      style={{ marginBottom: '1.45rem' }}
    />
    <p>
      <Container>
        <Link to="/page1/">Go to page one test</Link>
      </Container>
      <br />
      <Link to="/using-typescript/">Go to Using TypeScript</Link>
    </p>
  </>
);

const Container = styled.span`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default IndexPage;
