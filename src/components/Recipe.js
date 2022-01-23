import React from 'react';
import styled from 'styled-components';
import { lineBreaker } from '../utils/lineBreaker';
import { FOOD_COLORS, QUERIES } from '../constants';

const FoodType = styled.p`
  background-color: ${(p) => FOOD_COLORS[p.serialNumber]};
  color: var(--clr-white);
  width: max-content;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

const Ingredients = styled.div`
  margin: 1rem 0;
  font-family: Adelle;
  font-size: 18px;
  font-weight: 700;
  font-style: italic;
`;

const Making = styled.p`
  font-family: Adelle;
  font-size: 1rem;
  font-weight: 400;
`;

const FoodBadge = styled.span`
  text-transform: uppercase;
  background-color: ${(p) => FOOD_COLORS[`${p.serialNumber}-light`]};
  color: ${(p) => FOOD_COLORS[p.serialNumber]};
  font-size: ${10 / 16}rem;
  padding: 2px 3px 1px;
  border-radius: 2px;
  font-family: 'Adelle';

  @media ${QUERIES.tabletAndUp} {
    font-size: ${12 / 16}rem;
    padding: 3px 4px 2px;
    margin-top: 2px;
    border-radius: 4px;
  }
`;

const RecipeTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 4px;

  @media ${QUERIES.tabletAndUp} {
    gap: 6px;
    font-size: ${32 / 16}rem;
  }
`;

export default function Recipe({
  foodType,
  recipeName,
  recipeNote,
  ingredients,
  making,
  serialNumber,
}) {
  const lineBreakedIngredients = lineBreaker(ingredients);
  const lineBreakedMaking = lineBreaker(making);

  return (
    <>
      {/* <FoodType serialNumber={serialNumber}>{foodType}</FoodType> */}
      <RecipeTitle>
        {recipeName} {recipeNote && <span>({recipeNote})</span>}
        <FoodBadge serialNumber={serialNumber}>{foodType}</FoodBadge>
      </RecipeTitle>
      <Ingredients>{lineBreakedIngredients}</Ingredients>
      <Making>{lineBreakedMaking}</Making>
    </>
  );
}
