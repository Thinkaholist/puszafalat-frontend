import React from 'react';
import { graphql, Link } from 'gatsby';
import localize from '../components/localize';
import Layout from '../components/Layout';

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
        <h1>Receptek</h1>
        <button>{data.recipesPage.appetizersButtonText}</button>
        <button>{data.recipesPage.dessertsButtonText}</button>
        <button>{data.recipesPage.mainCoursesButtonText}</button>
        {puszafalatok.map(
          ({
            _id,
            title,
            slug: { current },
            recipe: {
              category: { name },
            },
          }) => (
            <Link key={_id} to={`${getLocale(pathname)}/puszafalat/${current}`}>
              {title}({name})
            </Link>
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
