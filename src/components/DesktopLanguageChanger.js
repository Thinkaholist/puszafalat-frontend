import React from 'react';
import styled from 'styled-components';
import { QUERIES } from '../constants';

const LanguageCodeStyles = styled.p`
  display: none;
  @media ${QUERIES.tabletAndUp} {
    display: block;
  } ;
`;

export default function DesktopLangugeChanger() {
  return (
    <>
      <LanguageCodeStyles>HU / EN / SK</LanguageCodeStyles>
    </>
  );
}
