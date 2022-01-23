import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import localize from '../components/localize';
import HeroSection from '../components/HeroSection';
import BandCampSection from '../components/BandCampSection';

const IndexPage = ({ data, location }) => {
  const { albumEmbedCode } = data.homePage;

  return (
    <>
      <Layout header={data.header} footer={data.footer} location={location}>
        <HeroSection
          heroImage={data.homePage.heroImage}
          headerText={data.homePage.headerText}
          subHeaderText={data.homePage.subHeaderText}
        />
        <BandCampSection
          bandCampText={data.homePage.bandCampText}
          albumEmbedCode={albumEmbedCode}
        />
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
      albumEmbedCode
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
