import React from 'react';
import Img from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';
import { ContainerStyles } from '../styles/ContainerStyles';
import { QUERIES } from '../constants';

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
  gap: 1rem;
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
  font-size: ${24 / 16}rem;
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

export default function HeroSection({ heroImage, headerText, subHeaderText }) {
  return (
    <HeroSectionWrapper>
      <HeroContainer>
        <ImageContainer>
          <Img {...heroImage.image} alt={heroImage.altText} />
        </ImageContainer>
        <TextContainer>
          <HeaderText>{headerText}</HeaderText>
          <SubHeaderText>{subHeaderText}</SubHeaderText>
        </TextContainer>
      </HeroContainer>
    </HeroSectionWrapper>
  );
}
