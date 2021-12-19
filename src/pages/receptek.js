import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import localize from '../components/localize';
import Layout from '../components/Layout';

const LinkStyles = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
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
        {puszafalatok.map(
          ({ _id, title, slug: { current }, recipe: { category, name } }) => (
            <LinkStyles
              key={_id}
              to={`${getLocale(pathname)}/puszafalat/${current}`}
            >
              {title} ({name})
            </LinkStyles>
          )
        )}
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
    allSanityPuszafalat {
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
