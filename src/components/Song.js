import React from 'react';
import styled from 'styled-components';
import BandCampParser from './BandCampParser';
import { lineBreaker } from '../utils/lineBreaker';
import { QUERIES, FOOD_COLORS } from '../constants';

const EmbedTrack = styled.div`
  margin: 50px auto;
  max-width: 550px;
`;

const SongTitle = styled.h2`
  margin: 1rem 0;
  font-weight: 800;
  font-size: 18px;
  text-align: center;

  @media ${QUERIES.tabletAndUp} {
    font-size: ${32 / 16}rem;
  }
`;

const LyricsWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  @media ${QUERIES.tabletAndUp} {
    font-size: ${20 / 16}rem;
  }
`;

export default function Song({
  songTitle,
  bandcampTrack,
  songLyrics,
  serialNumber,
}) {
  const lineBreakedLyrics = lineBreaker(songLyrics);
  const linkColor = FOOD_COLORS[`${serialNumber}-bg-hex`];

  return (
    <>
      <EmbedTrack>
        <BandCampParser trackCode={bandcampTrack} linkColor={linkColor} />
      </EmbedTrack>
      <SongTitle>{songTitle}</SongTitle>
      <LyricsWrapper>{lineBreakedLyrics}</LyricsWrapper>
    </>
  );
}
