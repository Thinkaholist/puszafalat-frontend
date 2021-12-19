import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';
import localize from '../components/localize';
import Layout from '../components/Layout';

const LinkStyles = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;

const Receptek = ({ data, location }) => {
  const puszafalatok = data.allSanityPuszafalat.nodes;
  const { pathname } = location;

  return (
    <>
      <Layout
        location={location}
        menuItemText={data.header.recipesMenuItemText}
        disclaimerText={data.footer.disclaimerText}
      >
        <div style={{ marginBottom: 40 }}>
          <button disabled>{data.recipesPage.appetizersButtonText}</button>
          <button disabled>{data.recipesPage.dessertsButtonText}</button>
          <button disabled>{data.recipesPage.mainCoursesButtonText}</button>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fill, minmax(min(227px, 100%), 1fr))',
            gap: 20,
            margin: '0 0 2rem 0',
          }}
        >
          {puszafalatok.map(
            ({
              _id,
              title,
              slug: { current },
              illustration,
              recipe: { category, name },
            }) => (
              <LinkStyles
                key={_id}
                to={`${getLocale(pathname)}/puszafalat/${current}`}
              >
                <article
                  style={{
                    padding: 20,
                    border: '1px solid',
                    borderRadius: 12,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: 4,
                  }}
                >
                  <h3>
                    {title} ({name})
                  </h3>
                  <Img
                    {...illustration.image}
                    alt={illustration.altText}
                    style={{ width: 175 }}
                  />
                </article>
              </LinkStyles>
            )
          )}
        </div>
      </Layout>
    </>
  );
};

export default localize(Receptek);

export const query = graphql`
  query {
    recipesPage: sanityRecipesPage(_id: { eq: "recipesPage" }) {
      appetizersButtonText {
        _type
        en
        hu
        sk
      }
      dessertsButtonText {
        _type
        en
        hu
        sk
      }
      mainCoursesButtonText {
        _type
        en
        hu
        sk
      }
    }
    allSanityPuszafalat(sort: { fields: rank, order: ASC }) {
      nodes {
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
          category {
            name {
              _type
              hu
              en
              sk
            }
          }
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

function getLocale(pathname) {
  // ->  /
  // ->  /en
  // ->  /receptek
  // ->  /en/receptek
  // ->  /puszafalat/a-gyuru-hol
  // ->  /en/puszafalat/a-gyuru-hol
  if (pathname.startsWith('/en')) {
    return '/en';
  } else if (pathname.startsWith('/sk')) {
    return '/sk';
  } else {
    return '';
  }
}
