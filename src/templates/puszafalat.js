import React from 'react';
import { defaultLang } from '../config';
import Img from 'gatsby-plugin-sanity-image';
import { graphql, Link } from 'gatsby';
import localize from '../components/localize';
import Layout from '../components/Layout';
import { ContainerStyles } from '../styles/ContainerStyles';

const Puszafalat = ({ data, location, pageContext: { locale = '' } }) => {
  console.log({ location });
  console.log({ locale });
  console.log({ data });
  const ingredients = data.puszafalat.recipe.ingredients;
  const lineBreakedIngredients = ingredients
    .split('\n')
    .map((row) => <p>{row}</p>);
  const lyrics = data.puszafalat.song.lyrics;
  const lineBreakedLyrics = lyrics.split('\n').map((row) => <p>{row}</p>);
  return (
    <>
      <Layout
        location={location}
        menuItemText={data.header.recipesMenuItemText}
        disclaimerText={data.footer.disclaimerText}
      >
        <ContainerStyles>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'space-between',
            }}
          >
            {data.previous && (
              <Link
                to={`${locale === '' ? '' : `/${locale}`}/puszafalat/${
                  data.previous.slug.current
                }`}
              >
                &lt;- {data.previous.title}
              </Link>
            )}
            {data.next && (
              <Link
                to={`${locale === '' ? '' : `/${locale}`}/puszafalat/${
                  data.next.slug.current
                }`}
              >
                {data.next.title} -&gt;
              </Link>
            )}
          </div>
        </ContainerStyles>
        <br />
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
              fontSize: 24,
            }}
          >
            {data.page.storyDividerText}
          </h2>
        </div>
        <ContainerStyles>
          <h1>{data.puszafalat.title}</h1>
          <p>{data.puszafalat.story}</p>
          <div style={{ margin: '1rem 0' }}>
            <Img
              {...data.puszafalat.illustration.image}
              alt={data.puszafalat.illustration.altText}
              width={800}
              style={{ width: '100%' }}
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
              fontSize: 24,
            }}
          >
            {data.page.recipeDividerText}
          </h2>
        </div>
        <br />
        <ContainerStyles>
          <h2>{data.puszafalat.recipe.name}</h2>
          <div
            style={{
              margin: '1rem 0',
              fontFamily: 'Adelle',
              fontSize: 18,
              fontWeight: 700,
              fontStyle: 'italic',
            }}
          >
            {lineBreakedIngredients}
          </div>
          <p style={{ fontFamily: 'Adelle', fontSize: 16, fontWeight: 400 }}>
            {data.puszafalat.recipe.making}
          </p>
          <br />
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
              fontSize: 24,
            }}
          >
            {data.page.songDividerText}
          </h2>
        </div>
        <ContainerStyles>
          <h2
            style={{
              margin: '1rem 0',
              fontWeight: 800,
              fontSize: 18,
              textAlign: 'center',
            }}
          >
            {data.puszafalat.song.title}
          </h2>
          <div style={{ textAlign: 'center' }}>{lineBreakedLyrics}</div>
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
      recipe {
        name {
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
      }
      song {
        title {
          _type
          hu
          en
          sk
        }
        lyrics {
          _type
          hu
          en
          sk
        }
      }
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
