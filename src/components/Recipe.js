import React from 'react';
import styled from 'styled-components';
import { lineBreaker } from '../utils/lineBreaker';
import { FOOD_COLORS, QUERIES } from '../constants';

const FoodTypeBadge = styled.p`
  text-transform: uppercase;
  background-color: ${(p) => FOOD_COLORS[`${p.serialNumber}-light`]};
  color: ${(p) => FOOD_COLORS[p.serialNumber]};
  width: max-content;
  padding: 2px 3px 1px;
  font-size: ${16 / 16}rem;
  font-weight: 700;
  border-radius: 2px;
  font-family: 'Adelle';
  margin: 0 auto;
  margin-bottom: 1rem;

  @media ${QUERIES.tabletAndUp} {
    font-size: ${18 / 16}rem;
    padding: 6px 10px 5px;
    border-radius: 4px;
  }
`;

const RecipeTitle = styled.h2`
  text-align: center;
  font-family: 'Agrandir';
  font-weight: 800;
  font-size: ${18 / 16}rem;

  @media ${QUERIES.tabletAndUp} {
    font-size: ${32 / 16}rem;
    margin-bottom: 85px;
  }
`;

const RecipeWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    gap: 100px;
    margin-bottom: 4rem;
  }
`;

const Ingredients = styled.div`
  margin: 3rem 0;
  font-family: Adelle;
  font-size: 18px;
  font-weight: 700;
  font-style: italic;

  span {
    display: block;
    margin-bottom: 1rem;
  }

  @media ${QUERIES.tabletAndUp} {
    flex: 2;
    margin: 0;
    font-size: ${20 / 16}rem;

    span {
      margin-bottom: 2rem;
    }
  }
`;

const Making = styled.p`
  font-family: Adelle;
  font-size: ${16 / 16}rem;
  font-weight: 400;

  span {
    display: block;
    margin-bottom: 1rem;
  }

  @media ${QUERIES.tabletAndUp} {
    flex: 3;
    font-size: ${20 / 16}rem;

    span {
      margin-bottom: 2rem;
    }
  }
`;

export default function Recipe({
  foodType,
  recipeName,
  recipeNote,
  ingredients,
  making,
  serialNumber,
  ingredientsText,
  makingText,
}) {
  const lineBreakedIngredients = lineBreaker(ingredients);
  const lineBreakedMaking = lineBreaker(making);

  return (
    <>
      <FoodTypeBadge serialNumber={serialNumber}>{foodType}</FoodTypeBadge>
      <RecipeTitle>
        {recipeName} {recipeNote && <span>({recipeNote})</span>}
      </RecipeTitle>
      <RecipeWrapper>
        <Ingredients>
          <span>{ingredientsText}</span>
          {lineBreakedIngredients}
        </Ingredients>
        <Making>
          <span>{makingText}</span>
          {lineBreakedMaking}
        </Making>
      </RecipeWrapper>
    </>
  );
}
