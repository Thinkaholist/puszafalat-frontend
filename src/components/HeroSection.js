import React from 'react';
import Img from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';
import { ContainerStyles } from '../styles/ContainerStyles';
import { QUERIES } from '../constants';

const HeroSectionWrapper = styled.section`
  margin: 1rem 0 2rem;
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
  @media ${QUERIES.tabletAndUp} {
    flex: 1;
  }

  @media ${QUERIES.laptopAndUp} {
    flex: 5;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${QUERIES.tabletAndUp} {
    flex: 1;
    justify-content: center;
  }

  @media ${QUERIES.laptopAndUp} {
    flex: 7;
  }
`;

const HeaderText = styled.h1`
  font-size: ${24 / 16}rem;
  font-family: 'Adelle';

  @media ${QUERIES.laptopAndUp} {
    font-size: ${50 / 16}rem;
    line-height: 58px;
  }
`;

const SubHeaderText = styled.h2`
  font-size: ${18 / 16}rem;
  font-weight: 400;

  @media ${QUERIES.laptopAndUp} {
    font-size: ${24 / 16}rem;
    line-height: 44px;
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
