import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-plugin-sanity-image';
import { lineBreaker } from '../utils/lineBreaker';
import { TextContainerStyles } from '../styles/TextContainerStyles';

const StoryTitle = styled.h1`
  margin-bottom: 19px;
`;

const StoryBody = styled.div`
  margin-bottom: 19px;
`;

const StoryImageWrapper = styled.div`
  margin: 4rem 0;
`;

const StoryImage = styled(Img)`
  width: 100%;
`;

export default function Story({
  title,
  story,
  illustration: { image, altText },
}) {
  const lineBreakedStory = lineBreaker(story);

  return (
    <>
      <TextContainerStyles>
        <StoryTitle>{title}</StoryTitle>
        <StoryBody>{lineBreakedStory}</StoryBody>
        <StoryImageWrapper>
          <StoryImage {...image} alt={altText} width={800} />
        </StoryImageWrapper>
      </TextContainerStyles>
    </>
  );
}
