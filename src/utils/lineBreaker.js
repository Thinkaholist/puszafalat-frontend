import React from 'react';

export function lineBreaker(text) {
  return text.split('\n').map((row, idx) => {
    if (row === '') return <br />;
    return <p key={idx}>{row}</p>;
  });
}
