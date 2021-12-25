import React from 'react';
import styled from 'styled-components';

const RadioStyles = styled.input`
  display: none;
  &:checked + label {
    color: var(--clr-white);
    border: 2px solid var(--clr-white);
    background-color: ${(p) => p.color};
    box-shadow: 2px 2px 0 0 var(--clr-black);
  }
`;

const ButtonStyles = styled.label`
  display: block;
  width: 124px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 300;
  font-size: 13px;
  padding: 6px 10px 4px;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.1s linear;
  border: 2px solid var(--clr-black);
  color: inherit;
  background-color: var(--clr-white);
  box-shadow: ${(p) => `2px 2px 0 0 ${p.color}`};
`;

export default function RadioButton({
  id,
  color = 'var(--clr-blue)',
  label = '',
  name = 'courseTypes',
  value = '',
}) {
  return (
    <>
      <RadioStyles
        id={id}
        type='radio'
        value={value}
        name={name}
        color={color}
      />
      <ButtonStyles htmlFor={id} color={color}>
        {label}
      </ButtonStyles>
    </>
  );
}
