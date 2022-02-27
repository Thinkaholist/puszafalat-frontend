import React from 'react';
import Img from 'gatsby-plugin-sanity-image';
import { graphql } from 'gatsby';
import localize from '../components/localize';
import Layout from '../components/Layout';
import { ContainerStyles } from '../styles/ContainerStyles';
import Recipe from '../components/Recipe';
import Pagination from '../components/Pagination';
import Song from '../components/Song';
import Story from '../components/Story';
import Divider from '../components/Divider';
import Seo from '../components/Seo';

const Puszafalat = ({ data, location, pageContext: { locale = '' } }) => {
  const { header, footer, logos } = data;
  const {
    title,
    origin,
    story,
    illustration,
    recipeName,
    recipeNote,
    making,
    foodType: { name: foodType, serialNumber },
    ingredients,
    bandcampTrack,
    songTitle,
    songLyrics,
  } = data.puszafalat;
  const {
    storyDividerText,
    recipeDividerText,
    songDividerText,
    ingredientsText,
    makingText,
    illustration: { image: pageImage, altText: pageAltText },
  } = data.page;
  const { previous, next } = data;
  const previousLink =
    previous &&
    `${locale === '' ? '' : `/${locale}`}/falat/${previous.slug.current}`;
  const nextLink =
    next && `${locale === '' ? '' : `/${locale}`}/falat/${next.slug.current}`;

  return (
    <>
      <Seo
        title={title}
        image={illustration.image.asset.url}
        language={locale === '' ? 'hu' : locale}
      />
      <Layout
        location={location}
        header={header}
        footer={footer}
        logos={logos.nodes}
      >
        <ContainerStyles>
          <Pagination
            previous={previous && previous}
            previousLink={previous && previousLink}
            next={next && next}
            nextLink={next && nextLink}
          />
        </ContainerStyles>
        <Divider text={storyDividerText} id='sztori' />
        <ContainerStyles>
          <Story
            title={title}
            origin={origin}
            story={story}
            illustration={illustration}
          />
        </ContainerStyles>
        <Divider text={recipeDividerText} id='recept' />
        <ContainerStyles>
          <Recipe
            foodType={foodType}
            recipeName={recipeName}
            recipeNote={recipeNote}
            ingredients={ingredients}
            making={making}
            serialNumber={serialNumber}
            ingredientsText={ingredientsText}
            makingText={makingText}
          />
        </ContainerStyles>
        <Divider text={songDividerText} id='dal' />
        <ContainerStyles>
          <Song
            songTitle={songTitle}
            songLyrics={songLyrics}
            bandcampTrack={bandcampTrack}
            serialNumber={serialNumber}
          />
          <Pagination
            previous={previous && previous}
            previousLink={previous && previousLink}
            next={next && next}
            nextLink={next && nextLink}
          />
          <div style={{ marginBottom: '2rem' }} />
          <Img {...pageImage} alt={pageAltText} />
        </ContainerStyles>
      </Layout>
    </>
  );
};

export default localize(Puszafalat);

export const query = graphql`
  query details($slug: String!, $previousSlug: String, $nextSlug: String) {
    puszafalat: sanityPuszafalat(slug: { current: { eq: $slug } }) {
      _id
      slug {
        current
      }
      title {
        _type
        hu
        en
        sk
      }
      origin {
        _type
        en
        hu
        sk
      }
      story {
        _type
        hu
        en
        sk
      }
      illustration {
        altText
        image {
          ...ImageWithPreview
          asset {
            url
          }
        }
      }
      recipeName {
        _type
        hu
        en
        sk
      }
      recipeNote {
        _type
        hu
        en
        sk
      }
      ingredients {
        _type
        hu
        en
        sk
      }
      making {
        _type
        hu
        en
        sk
      }
      foodType {
        serialNumber
        name {
          _type
          hu
          en
          sk
        }
      }
      bandcampTrack
      songTitle
      songLyrics
    }
    previous: sanityPuszafalat(slug: { current: { eq: $previousSlug } }) {
      slug {
        current
      }
      title {
        _type
        hu
        en
        sk
      }
      foodType {
        serialNumber
      }
    }
    next: sanityPuszafalat(slug: { current: { eq: $nextSlug } }) {
      slug {
        current
      }
      title {
        _type
        hu
        en
        sk
      }
      foodType {
        serialNumber
      }
    }
    page: sanityPuszafalatPage(_id: { eq: "puszafalatPage" }) {
      storyDividerText {
        _type
        en
        hu
        sk
      }
      recipeDividerText {
        _type
        en
        hu
        sk
      }
      songDividerText {
        _type
        en
        hu
        sk
      }
      illustration {
        altText
        image {
          ...ImageWithPreview
          asset {
            url
          }
        }
      }
      ingredientsText {
        _type
        en
        hu
        sk
      }
      makingText {
        _type
        en
        hu
        sk
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
    }
    logos: allSanityClickableLogo(sort: { fields: rank, order: ASC }) {
      nodes {
        rank
        url
        displayName
        logo {
          altText
          image {
            ...ImageWithPreview
          }
        }
        multilanguageLogo {
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
      }
    }
  }
`;
