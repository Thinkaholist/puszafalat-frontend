import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';
import { ContainerStyles } from '../styles/ContainerStyles';
import { QUERIES } from '../constants';
import { getReceptekUrl } from '../components/Header';

const HeroSectionWrapper = styled.section`
  padding: 4rem 0 2rem;

  @media ${QUERIES.tabletAndUp} {
    padding: 6rem 0 3rem;
  }
`;

const HeroContainer = styled(ContainerStyles)`
  display: flex;
  flex-direction: column;
  gap: 54px;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  img {
    width: 65%;
    margin: 0 auto;
  }
  @media ${QUERIES.tabletAndUp} {
    flex: 1;
    img {
      width: 100%;
    }
  }

  @media ${QUERIES.laptopAndUp} {
    flex: 5;
    img {
      width: 100%;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;

  @media ${QUERIES.tabletAndUp} {
    flex: 1;
    justify-content: flex-end;
    text-align: left;
  }

  @media ${QUERIES.laptopAndUp} {
    flex: 7;
    text-align: left;
  }
`;

const HeaderText = styled.h1`
  font-size: ${32 / 16}rem;
  font-family: 'Adelle';

  @media ${QUERIES.laptopAndUp} {
    font-size: ${58 / 16}rem;
    line-height: 1.2;
  }
`;

const SubHeaderText = styled.h2`
  font-size: ${18 / 16}rem;
  font-weight: 400;

  @media ${QUERIES.laptopAndUp} {
    font-size: ${20 / 16}rem;
  }
`;

const RecipesButtonLink = styled(Link)`
  width: max-content;
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  color: var(--clr-black);
  text-decoration: none;
  font-weight: 300;
  font-size: 20px;
  background-color: var(--clr-pink);
  padding: 6px 10px 4px;
  border-radius: 16px;
  box-shadow: 2px 2px 0 0 var(--clr-black);
  transition: box-shadow 0.1s ease-out;

  svg {
    width: 24px;
  }

  path {
    stroke-width: 2px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin: 0;

    &:hover {
      box-shadow: 5px 5px 0 0 var(--clr-black);
    }
  }
`;

export default function HeroSection({
  heroImage,
  headerText,
  subHeaderText,
  location,
  header: { recipesMenuItemText },
}) {
  const { pathname } = location;

  return (
    <HeroSectionWrapper>
      <HeroContainer>
        <ImageContainer>
          <Img {...heroImage.image} alt={heroImage.altText} />
        </ImageContainer>
        <TextContainer>
          <HeaderText>{headerText}</HeaderText>
          <SubHeaderText>{subHeaderText}</SubHeaderText>
          <RecipesButtonLink to={`${getReceptekUrl(pathname)}/receptek`}>
            {recipesMenuItemText}{' '}
            <svg
              width='60'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 75.99 42.87'
            >
              <g id='ILLU_01'>
                <path d='M55.56,0h-2A22.45,22.45,0,0,0,66.75,20.43H0v2H66.75A22.47,22.47,0,0,0,53.56,42.87h2A20.46,20.46,0,0,1,76,22.43v-2A20.45,20.45,0,0,1,55.56,0Z' />
              </g>
            </svg>
          </RecipesButtonLink>
        </TextContainer>
      </HeroContainer>
    </HeroSectionWrapper>
  );
}
