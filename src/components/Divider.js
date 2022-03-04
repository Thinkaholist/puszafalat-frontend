import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { QUERIES } from '../constants';
import { BiLink } from 'react-icons/bi';

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

  @media (hover: hover) and (pointer: fine) {
    &:hover + a {
      opacity: 1;
    }
  }

  @media ${QUERIES.laptopAndUp} {
    font-size: 24px;
  } ;
`;

const LinkStyles = styled(Link)`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  cursor: pointer;
  opacity: 0;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 1;
      svg {
        fill: var(--clr-black);
      }
    }
  }
`;

const Divider = ({ text, id, location }) => {
  console.log({ location });
  return (
    <DividerWrapper id={id}>
      <Line />
      <DividerText>{text}</DividerText>
      <LinkStyles to={`${location.href.split('#')[0]}#${id}`}>
        <BiLink size={24} color='lightgray' />
      </LinkStyles>
    </DividerWrapper>
  );
};

export default Divider;
