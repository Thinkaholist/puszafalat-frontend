import React from 'react';
import Img from 'gatsby-plugin-sanity-image';
import { graphql } from 'gatsby';
import localize from '../components/localize';
import Layout from '../components/Layout';
import { ContainerStyles } from '../styles/ContainerStyles';
import { lineBreaker } from '../utils/lineBreaker';
import BandCampParser from '../components/BandCampParser';
import Recipe from '../components/Recipe';
import Pagination from '../components/Pagination';

const Puszafalat = ({ data, location, pageContext: { locale = '' } }) => {
  const {
    title,
    story,
    illustration: { image, altText },
    recipeName,
    recipeNote,
    making,
    foodType: { name: foodType, serialNumber },
    ingredients,
    bandcampTrack,
    songTitle,
    songLyrics,
  } = data.puszafalat;
  const { previous, next } = data;
  const lineBreakedLyrics = lineBreaker(songLyrics);
  const lineBreakedStory = lineBreaker(story);
  const previousLink =
    previous &&
    `${locale === '' ? '' : `/${locale}`}/puszafalat/${previous.slug.current}`;
  const nextLink =
    next &&
    `${locale === '' ? '' : `/${locale}`}/puszafalat/${next.slug.current}`;

  return (
    <>
      <Layout
        location={location}
        menuItemText={data.header.recipesMenuItemText}
        disclaimerText={data.footer.disclaimerText}
      >
        <ContainerStyles>
          <Pagination
            previous={previous && previous}
            previousLink={previous && previousLink}
            next={next && next}
            nextLink={next && nextLink}
          />
        </ContainerStyles>
        <div style={{ position: 'relative', margin: '2rem 0' }}>
          <hr
            style={{
              border: 'none',
              height: 2,
              backgroundColor: 'var(--clr-black)',
            }}
          />
          <h2
            style={{
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'var(--clr-background)',
              width: 'max-content',
              padding: '0 1rem',
              position: 'absolute',
              left: '50%',
              textTransform: 'uppercase',
              fontWeight: 300,
              fontSize: 14,
            }}
          >
            {data.page.storyDividerText}
          </h2>
        </div>
        <ContainerStyles>
          <h1 style={{ marginBottom: 19 }}>{title}</h1>
          <div style={{ marginBottom: 19 }}>{lineBreakedStory}</div>
          <div style={{ margin: '1rem 0' }}>
            <Img
              {...image}
              alt={altText}
              width={800}
              style={{
                width: '100%',
              }}
            />
          </div>
        </ContainerStyles>
        <br />
        <div style={{ position: 'relative', margin: '2rem 0' }}>
          <hr
            style={{
              border: 'none',
              height: 2,
              backgroundColor: 'var(--clr-black)',
            }}
          />
          <h2
            style={{
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'var(--clr-background)',
              width: 'max-content',
              padding: '0 1rem',
              position: 'absolute',
              left: '50%',
              textTransform: 'uppercase',
              fontWeight: 300,
              fontSize: 14,
            }}
          >
            {data.page.recipeDividerText}
          </h2>
        </div>
        <br />
        <ContainerStyles>
          <Recipe
            foodType={foodType}
            recipeName={recipeName}
            recipeNote={recipeNote}
            ingredients={ingredients}
            making={making}
            serialNumber={serialNumber}
          />
        </ContainerStyles>
        <div style={{ position: 'relative', margin: '2rem 0' }}>
          <hr
            style={{
              border: 'none',
              height: 2,
              backgroundColor: 'var(--clr-black)',
            }}
          />
          <h2
            style={{
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'var(--clr-background)',
              width: 'max-content',
              padding: '0 1rem',
              position: 'absolute',
              left: '50%',
              textTransform: 'uppercase',
              fontWeight: 300,
              fontSize: 14,
            }}
          >
            {data.page.songDividerText}
          </h2>
        </div>
        <ContainerStyles>
          <div style={{ margin: '50px auto', maxWidth: 550 }}>
            <BandCampParser trackCode={bandcampTrack} linkColor='336699' />
          </div>
          <h2
            style={{
              margin: '1rem 0',
              fontWeight: 800,
              fontSize: 18,
              textAlign: 'center',
            }}
          >
            {songTitle}
          </h2>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            {lineBreakedLyrics}
          </div>
          <Pagination
            previous={previous && previous}
            previousLink={previous && previousLink}
            next={next && next}
            nextLink={next && nextLink}
          />
          <br />
          <Img
            {...data.page.illustration.image}
            alt={data.page.illustration.altText}
          />
          <br />
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
