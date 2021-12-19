import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import localize from '../components/localize';
import Img from 'gatsby-plugin-sanity-image';

const IndexPage = ({ data, location }) => {
  return (
    <>
      <Layout
        disclaimerText={data.footer.disclaimerText}
        location={location}
        menuItemText={data.header.recipesMenuItemText}
      >
        <div style={{ display: 'grid', placeContent: 'center' }}>
          <div style={{ width: '70%', margin: '0 auto' }}>
            <Img
              {...data.homePage.heroImage.image}
              alt={data.homePage.heroImage.altText}
              width={800}
              style={{ width: '100%' }}
            />
          </div>
          <h1
            style={{
              fontSize: 30,
              margin: '32px 0',
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            {data.homePage.headerText}
          </h1>
          <p>{data.homePage.subHeaderText}</p>
          <p>{data.homePage.bandCampText}</p>
        </div>
      </Layout>
    </>
  );
};

export default localize(IndexPage);

export const query = graphql`
  query {
    homePage: sanityHomePage(_id: { eq: "homePage" }) {
      headerText {
        _type
        en
        hu
        sk
      }
      subHeaderText {
        _type
        en
        hu
        sk
      }
      bandCampText {
        _type
        en
        hu
        sk
      }
      heroImage {
        altText
        image {
          ...ImageWithPreview
        }
      }
    }
    header: sanityHeaderPage(_id: { eq: "headerPage" }) {
      recipesMenuItemText {
        _type
        hu
        en
        sk
      }
    }
    footer: sanityFooterPage(_id: { eq: "footerPage" }) {
      disclaimerText {
        _type
        en
        hu
        sk
      }
    }
  }
`;
