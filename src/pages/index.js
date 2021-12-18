import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage = ({ data }) => {
  return (
    <>
      <Layout>
        <div style={{ display: 'grid', placeContent: 'center' }}>
          <h1
            style={{
              fontSize: 40,
              margin: '32px 0',
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            {data.homePage.headerText.hu}
          </h1>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    homePage: sanityHomePage(_id: { eq: "homePage" }) {
      headerText {
        en
        hu
        sk
      }
    }
  }
`;
