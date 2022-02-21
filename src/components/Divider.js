import React from 'react';
import styled from 'styled-components';
import { QUERIES } from '../constants';

const DividerWrapper = styled.div`
  position: relative;
  margin: 2rem 0;
`;

const Line = styled.hr`
  border: none;
  height: 2px;
  background-color: var(--clr-black);
`;

const DividerText = styled.h2`
  transform: translate(-50%, -50%);
  background-color: var(--clr-background);
  width: max-content;
  padding: 0 1rem;
  position: absolute;
  left: 50%;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 14px;

  @media ${QUERIES.laptopAndUp} {
    font-size: 24px;
  } ;
`;

const Divider = ({ text, id }) => {
  return (
    <DividerWrapper id={id}>
      <Line />
      <DividerText>{text}</DividerText>
    </DividerWrapper>
  );
};

export default Divider;
