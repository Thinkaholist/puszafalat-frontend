import React, { useState } from 'react';
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
  console.log({ puszafalatok });
  const { pathname } = location;
  const [searchTerm, setSearchTerm] = useState('');
  const [filtered, setFiltered] = useState(
    puszafalatok.map((pf) => {
      return {
        ...pf,
        title: `<h3>${pf.title}</h3>`,
      };
    })
  );

  const handleSearch = (ev) => {
    const { value } = ev.target;
    ev.preventDefault();
    let pattern = new RegExp(searchTerm, 'gi');
    const filteredSearch = puszafalatok.filter(
      ({ title, recipe: { name, category }, origin }) =>
        title.toLowerCase().includes(value.toLowerCase()) ||
        name.toLowerCase().includes(value.toLowerCase()) ||
        origin.toLowerCase().includes(value.toLowerCase()) ||
        category.name.toLowerCase().includes(value.toLowerCase())
    );

    console.log({ filteredSearch });

    const highlighted =
      searchTerm === ''
        ? filteredSearch.map((pf) => {
            return {
              ...pf,
              title: `<h3>${pf.title}</h3>`,
            };
          })
        : filteredSearch.map((pf) => {
            let matchedTitle = pf.title.replace(
              pattern,
              (match) => `<mark>${match}</mark>`
            );
            return {
              ...pf,
              title: `<h3>${matchedTitle}</h3>`,
            };
          });
    setFiltered(() => {
      return highlighted;
    });
  };

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
        <div>
          <input
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyUp={handleSearch}
            placeholder='Keress egy puszafalatra, vagy receptre...'
            style={{
              padding: 10,
              paddingLeft: 16,
              display: 'block',
              margin: '0 auto',
              marginBottom: 16,
              width: 400,
              maxWidth: '100%',
              fontSize: 18,
              borderRadius: 6,
              border: '1px solid hsla(0, 0%, 0%, 0.3)',
            }}
          />
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
            {filtered.length || `Nothing found`}
          </h2>
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
          {filtered.map(
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
                    borderRadius: 12,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: 4,
                    backgroundColor: '#fff',
                    boxShadow: '0px 4px 4px 0px hsla(0, 0%, 0%, 0.25)',
                  }}
                >
                  <div dangerouslySetInnerHTML={{ __html: title }} />
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
        origin {
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
