import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-plugin-sanity-image';
import { lineBreaker } from '../utils/lineBreaker';
import { TextContainerStyles } from '../styles/TextContainerStyles';
import { QUERIES } from '../constants';

const StoryTitle = styled.h1`
  font-weight: 800;
  font-size: ${18 / 16}rem;
  text-align: center;

  @media ${QUERIES.tabletAndUp} {
    font-size: ${36 / 16}rem;
    text-align: left;
    margin-top: 50px;
  }
`;

const Origin = styled.h2`
  font-weight: 300;
  font-size: ${15 / 16}rem;
  margin-bottom: 19px;
  text-align: center;

  @media ${QUERIES.tabletAndUp} {
    text-align: left;
    font-size: ${20 / 16}rem;
    margin-bottom: 34px;
  }
`;

const StoryBody = styled.div`
  margin-bottom: 19px;

  @media ${QUERIES.tabletAndUp} {
    font-size: ${20 / 16}rem;
  }
`;

const StoryImageWrapper = styled.div`
  margin: 4rem 0;
`;

const StoryImage = styled(Img)`
  width: 100%;
`;

export default function Story({
  title,
  origin,
  story,
  illustration: { image, altText },
}) {
  const lineBreakedStory = lineBreaker(story);

  return (
    <>
      <TextContainerStyles>
        <StoryTitle>{title}</StoryTitle>
        <Origin>{origin}</Origin>
        <StoryBody>{lineBreakedStory}</StoryBody>
        <StoryImageWrapper>
          <StoryImage {...image} alt={altText} width={800} />
        </StoryImageWrapper>
      </TextContainerStyles>
    </>
  );
}
