import * as React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-plugin-sanity-image';
import Layout from '../components/Layout';
import localize from '../components/localize';
import { ContainerStyles } from '../styles/ContainerStyles';
import BandCampParser from '../components/BandCampParser';
import HeroSection from '../components/HeroSection';

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
        {/* <ContainerStyles>
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
          <div style={{ margin: '16px auto', maxWidth: 450 }}>
            <BandCampParser albumCode={albumEmbedCode} />
          </div>
        </ContainerStyles> */}
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
