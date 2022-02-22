import React from 'react';
import styled from 'styled-components';
import { ContainerStyles } from '../styles/ContainerStyles';
import BandCampParser from './BandCampParser';
import { QUERIES } from '../constants';
import getYoutubeId from 'get-youtube-id';
import ReactPlayer from 'react-player';

const BandCampSectionWrapper = styled.section`
  background-color: rgba(49, 153, 81, 0.7);
  padding: 3rem 0;
`;

const BandCampText = styled.p`
  text-align: center;
  font-size: ${18 / 16}rem;

  @media ${QUERIES.laptopAndUp} {
    font-size: ${24 / 16}rem;
  } ;
`;

const ArrowIconRow = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 0;
`;

const ArrowIconWrapper = styled.div`
  width: fit-content;
  transform: rotate(90deg);
`;

const EmbedPlayerWrapper = styled.div`
  margin: 16px auto;
  max-width: 450px;
`;

const VideoContainer = styled(ContainerStyles)`
  margin-bottom: 2rem;
  flex-direction: column;
  display: flex;
  gap: 2rem;

  & > * {
    flex: 1;
  }

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
  }
`;

const Div = styled.div`
  height: 261px;
  line-height: 0;
`;

export default function BandCampSection({
  bandCampText,
  albumEmbedCode,
  youtube1: { url: url1 },
  youtube2: { url: url2 },
}) {
  return (
    <>
      <BandCampSectionWrapper>
        <VideoContainer>
          <Div>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${getYoutubeId(url1)}`}
              width='100%'
              height='261px'
              light={
                'https://cdn.sanity.io/images/6h8tota2/production/3fac9e27a891ac9f7375404595f9d4971c4b54bb-3358x1892.png?w=500'
              }
              // light={`https://i3.ytimg.com/vi/${getYoutubeId(
              //   url1
              // )}/hqdefault.jpg`}
            />
          </Div>
          <Div>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${getYoutubeId(url2)}`}
              width='100%'
              height='261px'
              light={
                'https://cdn.sanity.io/images/6h8tota2/production/3ec3de1b2c2e3e4f3706f153baa370952a77d2f9-3360x1890.png?w=500'
              }
              // light={`https://i3.ytimg.com/vi/${getYoutubeId(
              //   url2
              // )}/hqdefault.jpg`}
            />
          </Div>
        </VideoContainer>
        <ContainerStyles>
          <BandCampText>{bandCampText}</BandCampText>
          <ArrowIconRow>
            <ArrowIconWrapper>
              <svg
                width='60'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 75.99 42.87'
              >
                <g id='ILLU_01'>
                  <path d='M55.56,0h-2A22.45,22.45,0,0,0,66.75,20.43H0v2H66.75A22.47,22.47,0,0,0,53.56,42.87h2A20.46,20.46,0,0,1,76,22.43v-2A20.45,20.45,0,0,1,55.56,0Z' />
                </g>
              </svg>
            </ArrowIconWrapper>
          </ArrowIconRow>
          <EmbedPlayerWrapper>
            <BandCampParser albumCode={albumEmbedCode} />
          </EmbedPlayerWrapper>
        </ContainerStyles>
      </BandCampSectionWrapper>
    </>
  );
}
