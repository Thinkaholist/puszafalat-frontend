import React from 'react';
import styled from 'styled-components';
import { QUERIES } from '../constants';

const LanguageCodeStyles = styled.p`
  /* @media ${QUERIES.tabletAndUp} {
    display: none;
  } */
  display: none;
`;

export default function MobileLangugeChanger() {
  return (
    <>
      <LanguageCodeStyles>HU</LanguageCodeStyles>
    </>
  );
}
