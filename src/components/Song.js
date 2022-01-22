import React from 'react';
import styled from 'styled-components';
import BandCampParser from './BandCampParser';
import { lineBreaker } from '../utils/lineBreaker';

const EmbedTrack = styled.div`
  margin: 50px auto;
  max-width: 550px;
`;

const SongTitle = styled.h2`
  margin: 1rem 0;
  font-weight: 800;
  font-size: 18px;
  text-align: center;
`;

const LyricsWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export default function Song({ songTitle, bandcampTrack, songLyrics }) {
  const lineBreakedLyrics = lineBreaker(songLyrics);

  return (
    <>
      <EmbedTrack>
        <BandCampParser trackCode={bandcampTrack} linkColor='336699' />
      </EmbedTrack>
      <SongTitle>{songTitle}</SongTitle>
      <LyricsWrapper>{lineBreakedLyrics}</LyricsWrapper>
    </>
  );
}
