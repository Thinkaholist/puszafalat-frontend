import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import localize from '../components/localize';
import Layout from '../components/Layout';
import { ContainerStyles } from '../styles/ContainerStyles';
import RadioButton from '../components/RadioButton';
import PuszaCard from '../components/PuszaCard';
import { QUERIES } from '../constants';
import Seo from '../components/Seo';

const ButtonsContainer = styled.div`
  margin: 1rem auto;
  margin-bottom: 0;

  @media ${QUERIES.tabletAndUp} {
    margin: 3rem auto;
  }
`;

const ButtonFlex = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    justify-content: space-around;
  } ;
`;

const AllRadioInputWrapper = styled.div`
  display: grid;
  place-content: center;
  margin: 1rem auto;
`;

const AllRadioInput = styled.input`
  display: none;
  &:checked + label {
    opacity: 0;
  }
`;

const AllRadioButton = styled.label`
  opacity: 1;
  text-decoration: none;
  color: var(--clr-blue);
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(227px, 100%), 1fr));
  gap: 20px;
  margin: 0 0 2rem 0;
`;

const Receptek = ({ data, location }) => {
  const { pathname } = location;
  const {
    appetizersButtonText,
    dessertsButtonText,
    mainCoursesButtonText,
    allRecipeButtonText,
    noPuszafalatFoundText,
  } = data.recipesPage;
  const { header, footer, logos } = data;
  const puszafalatok = data.allSanityPuszafalat.nodes;
  const pageTitle = data.homePage.pageTitle;
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
      <Seo title={data.header.recipesMenuItemText} />
      <Layout
        location={location}
        header={header}
        footer={footer}
        logos={logos.nodes}
        pageTitle={pageTitle}
      >
        <ContainerStyles>
          <ButtonsContainer onChange={onChangeValue}>
            <ButtonFlex>
              <RadioButton
                id='appetizer'
                color='var(--clr-blue)'
                label={appetizersButtonText}
                value={1}
              />
              <RadioButton
                id='mainCourse'
                color='var(--clr-green)'
                label={mainCoursesButtonText}
                value={2}
              />
              <RadioButton
                id='dessert'
                color='var(--clr-orange)'
                label={dessertsButtonText}
                value={3}
              />
            </ButtonFlex>
            <AllRadioInputWrapper>
              <AllRadioInput
                id='allRecipe'
                type='radio'
                name='courseTypes'
                value=''
                defaultChecked
              />
              <AllRadioButton htmlFor='allRecipe'>
                {allRecipeButtonText}
              </AllRadioButton>
            </AllRadioInputWrapper>
          </ButtonsContainer>
          {!filtered.length && (
            <h2 style={{ textAlign: 'center' }}>{noPuszafalatFoundText}</h2>
          )}
          <GridContainer>
            {filtered.length > 0 &&
              filtered.map((puszafalat) => (
                <PuszaCard
                  key={puszafalat._id}
                  {...puszafalat}
                  pathname={pathname}
                />
              ))}
          </GridContainer>
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
      allRecipeButtonText {
        _type
        en
        hu
        sk
      }
      noPuszafalatFoundText {
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
    homePage: sanityHomePage(_id: { eq: "homePage" }) {
      pageTitle {
        _type
        en
        hu
        sk
      }
    }
  }
`;
