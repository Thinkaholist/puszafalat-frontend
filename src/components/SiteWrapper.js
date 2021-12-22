import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

export default function SiteWrapper({ children }) {
  return (
    <>
      <Typography />
      <GlobalStyles />
      {children}
    </>
  );
}
