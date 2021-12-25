import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';
import localize from '../components/localize';
import Layout from '../components/Layout';
import { ContainerStyles } from '../styles/ContainerStyles';
import RadioButton from '../components/RadioButton';

const LinkStyles = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;

const AllRadioInput = styled.input`
  display: none;
  &:checked + label {
    opacity: 0;
  }
`;

const AllRadioButton = styled.label`
  opacity: 1;
  text-decoration: underline;
  color: var(--clr-blue);
`;

const Receptek = ({ data, location }) => {
  const { pathname } = location;
  const { appetizersButtonText, dessertsButtonText, mainCoursesButtonText } =
    data.recipesPage;
  const puszafalatok = data.allSanityPuszafalat.nodes;
  const [filtered, setFiltered] = useState(puszafalatok);

  function onChangeValue({ target: { value } }) {
    if (value === '') return setFiltered(() => puszafalatok);
    const updated = puszafalatok.filter(
      (e) => e.foodType.serialNumber.toString() === value
    );
    setFiltered(() => updated);
  }

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
              margin: '1rem auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              alignItems: 'center',
            }}
            onChange={onChangeValue}
          >
            <RadioButton
              id='appetizer'
              color='var(--clr-blue)'
              label={appetizersButtonText}
              value={1}
            />
            <RadioButton
              id='mainCourse'
              color='var(--clr-orange)'
              label={mainCoursesButtonText}
              value={2}
            />
            <RadioButton
              id='dessert'
              color='var(--clr-green)'
              label={dessertsButtonText}
              value={3}
            />
            <div>
              <AllRadioInput
                id='allRecipe'
                type='radio'
                name='courseTypes'
                value=''
                defaultChecked
              />
              <AllRadioButton htmlFor='allRecipe'>
                All recipe (should come from Sanity)
              </AllRadioButton>
            </div>
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
            {!filtered.length && (
              <h4 style={{ textAlign: 'center' }}>
                Nem találtunk Puszafalatot!(Should come from Sanity)
              </h4>
            )}
            {filtered.length > 0 &&
              filtered.map(
                ({
                  _id,
                  title,
                  slug: { current },
                  illustration,
                  recipeName,
                }) => (
                  <LinkStyles
                    key={_id}
                    to={`${getLocale(pathname)}/puszafalat/${current}`}
                  >
                    <article
                      style={{
                        padding: 20,
                        // border: '1px solid',
                        boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 1)',
                        borderRadius: 12,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: 4,
                        backgroundColor: 'white',
                      }}
                    >
                      <h3>
                        {title} ({recipeName})
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
        </ContainerStyles>
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
        title {
          _type
          en
          hu
          sk
        }
        rank
        story {
          _type
          en
          hu
          sk
        }
        origin {
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
        recipeName {
          _type
          en
          hu
          sk
        }
        slug {
          current
        }
        foodType {
          serialNumber
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
