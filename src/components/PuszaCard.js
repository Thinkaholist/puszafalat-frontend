import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-plugin-sanity-image';
import { FOOD_COLORS } from '../constants';

const CardWrapper = styled.article`
  border: 2px solid;
  border-radius: 10px;
  background-color: var(--clr-white);
  box-shadow: 0 4px 4px 0 hsla(0, 0%, 0%, 0.25);
  display: grid;
  flex-direction: column;
  grid-template-rows: 60px 1fr 50px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  max-width: 19ch;
  text-align: center;
  margin: 0 auto;
  padding: 1rem 0;
`;

const ImageWrapper = styled.div`
  border-top: 2px solid;
  padding: 10px;
  display: flex;
  align-items: center;
  min-height: 250px;
  img {
    width: 100%;
  }
  /* TODO: change to normal  */
  @media (min-width: 756px) {
    min-height: revert;
  }
`;

const CardLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const CardFooter = styled.div`
  margin-top: auto;
  display: flex;
  height: 50px;
  font-family: 'Adelle';
  font-size: 12px;
  font-weight: 700;
  border-top: 2px solid;

  &:hover {
    cursor: pointer;
  }
`;

const FoodNameWrapper = styled.div`
  border-right: 2px solid var(--clr-black);
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => FOOD_COLORS[p.type]};
  color: var(--clr-white);
  border-radius: 0 0 0 8px;
  transition: background-color 0.2s linear;

  ${CardFooter}:hover & {
    background-color: var(--clr-black);
  }
`;

const FoodName = styled.p`
  text-align: center;
  max-width: 15ch;
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
      <CardWrapper>
        <TitleWrapper>
          <Title>
            {/* TODO: Delete rank from here */}
            {title} {rank}
          </Title>
        </TitleWrapper>
        <ImageWrapper>
          <Img {...illustration.image} alt={illustration.altText} />
        </ImageWrapper>
        <CardLink to={`${getLocale(pathname)}/puszafalat/${current}`}>
          <CardFooter>
            <FoodNameWrapper type={serialNumber}>
              <FoodName>{recipeName}</FoodName>
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
        </CardLink>
      </CardWrapper>
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
