import React from 'react';
import Header from '../components/Header';
import { defaultLang } from '../config';
import Img from 'gatsby-plugin-sanity-image';
import { graphql, Link } from 'gatsby';
import localize from '../components/localize';
import Layout from '../components/Layout';

const Puszafalat = ({ data, location, pageContext: { locale = '' } }) => {
  console.log({ location });
  console.log({ locale });
  console.log({ data });
  return (
    <>
      <Layout
        location={location}
        menuItemText={data.header.recipesMenuItemText}
        disclaimerText={data.footer.disclaimerText}
      >
        <div style={{ display: 'flex', gap: '1rem' }}>
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
        <h1>{data.puszafalat.title}</h1>
        <div style={{ width: 300, marginTop: '1rem' }}>
          <Img
            {...data.puszafalat.illustration.image}
            alt={data.puszafalat.illustration.altText}
            width={800}
            style={{ width: '100%' }}
          />
        </div>
        <p>{data.puszafalat.story}</p>
        <br />
        <hr />
        <br />
        <h2>{data.puszafalat.recipe.name}</h2>
        <p>{data.puszafalat.recipe.ingredients}</p>
        <p>{data.puszafalat.recipe.making}</p>
        <br />
        <hr />
        <h2>{data.puszafalat.song.title}</h2>
        <p>{data.puszafalat.song.lyrics}</p>
        <br />
        <hr />
        <br />
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
