import React from 'react';
import styled from 'styled-components';
import { lineBreaker } from '../utils/lineBreaker';
import { FOOD_COLORS } from '../constants';

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
      <FoodType serialNumber={serialNumber}>{foodType}</FoodType>
      <h2>
        {recipeName} {recipeNote && <span>({recipeNote})</span>}
      </h2>
      <Ingredients>{lineBreakedIngredients}</Ingredients>
      <Making>{lineBreakedMaking}</Making>
    </>
  );
}
