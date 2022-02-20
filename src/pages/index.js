import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import localize from '../components/localize';
import HeroSection from '../components/HeroSection';
import BandCampSection from '../components/BandCampSection';
import Seo from '../components/Seo';

const IndexPage = ({ data, location }) => {
  const { header, footer, homePage } = data;
  const {
    albumEmbedCode,
    pageTitle,
    heroImage,
    headerText,
    subHeaderText,
    bandCampText,
  } = homePage;

  return (
    <>
      <Seo title={pageTitle} image={heroImage.image.asset.url} />
      <Layout header={header} footer={footer} location={location}>
        <HeroSection
          heroImage={heroImage}
          headerText={headerText}
          subHeaderText={subHeaderText}
        />
        <BandCampSection
          bandCampText={bandCampText}
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
      pageTitle {
        _type
        en
        hu
        sk
      }
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
          asset {
            url
          }
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
      text2 {
        _type
        en
        hu
        sk
      }
      partnersText {
        _type
        en
        hu
        sk
      }
      interregLogo {
        _type
        en {
          altText
          image {
            ...ImageWithPreview
          }
        }
        hu {
          altText
          image {
            ...ImageWithPreview
          }
        }
        sk {
          altText
          image {
            ...ImageWithPreview
          }
        }
      }
      viaCarpatiaLogo {
        altText
        image {
          ...ImageWithPreview
        }
      }
      fmzLogo {
        altText
        image {
          ...ImageWithPreview
        }
      }
      buildingPartnershipLogo {
        _type
        en {
          altText
          image {
            ...ImageWithPreview
          }
        }
        hu {
          altText
          image {
            ...ImageWithPreview
          }
        }
        sk {
          altText
          image {
            ...ImageWithPreview
          }
        }
      }
      developmentFundLogo {
        _type
        en {
          altText
          image {
            ...ImageWithPreview
          }
        }
        hu {
          altText
          image {
            ...ImageWithPreview
          }
        }
        sk {
          altText
          image {
            ...ImageWithPreview
          }
        }
      }
      skhuUrl {
        url
        displayText
      }
      viaCarpatiaUrl {
        url
        displayText
      }
    }
  }
`;
