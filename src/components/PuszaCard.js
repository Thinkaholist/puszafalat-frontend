import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-plugin-sanity-image';
import { FOOD_COLORS, QUERIES } from '../constants';
import unify from '../utils/unifyString';

const CardLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const CardWrapper = styled.article`
  border-radius: 14px;
  background-color: var(--clr-white);
  box-shadow: 0 4px 4px 0 hsla(0, 0%, 0%, 0.25);
  display: grid;
  flex-direction: column;
  grid-template-rows: 60px 1fr 55px;
  height: 100%;

  &:hover {
    border: 2px solid;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px 10px 0 0;
  transition: background-color 0.2s linear;

  /* ${CardLink}:hover & {
    background-color: var(--clr-black);
    color: var(--clr-white);
  } */
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin: 0 auto;
  padding: 6px;
`;

const ImageWrapper = styled.div`
  border-top: 1px solid;
  padding: 10px;
  display: flex;
  align-items: center;
  min-height: 250px;
  img {
    width: 100%;
  }
  /* TODO: change to normal  */
  @media ${QUERIES.tabletAndUp} {
    min-height: revert;
  }
`;

const CardFooter = styled.div`
  margin-top: auto;
  display: flex;
  height: 100%;
  font-family: 'Adelle';
  font-size: 16px;
  font-weight: 700;
  border-top: 1px solid;
`;

const FoodNameWrapper = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => FOOD_COLORS[p.type]};
  color: var(--clr-white);
  border-radius: 0 0 0 8px;
  transition: background-color 0.2s linear;

  ${CardLink}:hover & {
    background-color: var(--clr-black);
  }
`;

const FoodName = styled.p`
  text-align: center;
  /* max-width: 20ch; */
`;

const ArrowWrapper = styled.div`
  margin-left: auto;
  flex: 1;
  display: grid;
  place-content: center;
`;

export default function PuszaCard({
  title,
  slug: { current },
  illustration,
  recipeName,
  foodType: { serialNumber },
  pathname,
  rank,
}) {
  return (
    <>
      <CardLink to={`${getLocale(pathname)}/falat/${current}`}>
        <CardWrapper>
          <TitleWrapper>
            <Title>{title}</Title>
          </TitleWrapper>
          <ImageWrapper>
            <Img {...illustration.image} alt={illustration.altText} />
          </ImageWrapper>
          <CardFooter>
            <FoodNameWrapper type={serialNumber}>
              <FoodName>{unify(recipeName)}</FoodName>
            </FoodNameWrapper>
            <ArrowWrapper>
              <svg
                width='45'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 75.99 42.87'
              >
                <g id='ILLU_01'>
                  <path d='M55.56,0h-2A22.45,22.45,0,0,0,66.75,20.43H0v2H66.75A22.47,22.47,0,0,0,53.56,42.87h2A20.46,20.46,0,0,1,76,22.43v-2A20.45,20.45,0,0,1,55.56,0Z' />
                </g>
              </svg>
            </ArrowWrapper>
          </CardFooter>
        </CardWrapper>
      </CardLink>
    </>
  );
}

function getLocale(pathname) {
  // ->  /
  // ->  /en
  // ->  /receptek
  // ->  /en/receptek
  // ->  /puszafalat/a-gyuru-hol
  // ->  /en/puszafalat/a-gyuru-hol
  if (pathname.startsWith('/en')) {
    return '/en';
  } else if (pathname.startsWith('/sk')) {
    return '/sk';
  } else {
    return '';
  }
}
