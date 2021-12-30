import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FOOD_COLORS } from '../constants';

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const PreviousWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  color: inherit;
  text-decoration: none;
`;
const ThreeDotWrapper = styled.div`
  display: flex;
  gap: 7px;
`;
const NextWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  color: inherit;
  text-decoration: none;
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(p) => FOOD_COLORS[p.idx + 1]};
`;

export default function Pagination({
  previous = {},
  next = {},
  previousLink = '',
  nextLink = '',
}) {
  return (
    <>
      <PaginationWrapper>
        {previous.slug && (
          <PreviousWrapper to={previousLink}>
            <div style={{ transform: 'rotate(180deg)' }}>
              <svg
                width='40'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 75.99 42.87'
              >
                <g id='ILLU_01'>
                  <path d='M55.56,0h-2A22.45,22.45,0,0,0,66.75,20.43H0v2H66.75A22.47,22.47,0,0,0,53.56,42.87h2A20.46,20.46,0,0,1,76,22.43v-2A20.45,20.45,0,0,1,55.56,0Z' />
                </g>
              </svg>
            </div>
            <p>{previous.title}</p>
          </PreviousWrapper>
        )}
        <ThreeDotWrapper>
          {Array.from(new Array(3)).map((_, idx) => (
            <Dot key={idx} idx={idx} />
          ))}
        </ThreeDotWrapper>
        {next.slug && (
          <NextWrapper to={nextLink}>
            <p>{next.title}</p>
            <div>
              <svg
                width='40'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 75.99 42.87'
              >
                <g id='ILLU_01'>
                  <path d='M55.56,0h-2A22.45,22.45,0,0,0,66.75,20.43H0v2H66.75A22.47,22.47,0,0,0,53.56,42.87h2A20.46,20.46,0,0,1,76,22.43v-2A20.45,20.45,0,0,1,55.56,0Z' />
                </g>
              </svg>
            </div>
          </NextWrapper>
        )}
      </PaginationWrapper>
    </>
  );
}
