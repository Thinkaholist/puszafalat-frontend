import React from 'react';
import SiteWrapper from './src/components/SiteWrapper';

export function wrapPageElement({ element, props }) {
  return <SiteWrapper {...props}>{element}</SiteWrapper>;
}

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === 'undefined') {
    await import('intersection-observer');
  }
};
