import React from 'react';
import SiteWrapper from './src/components/SiteWrapper';

export function wrapPageElement({ element, props }) {
  return <SiteWrapper {...props}>{element}</SiteWrapper>;
}
