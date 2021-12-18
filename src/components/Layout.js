import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const MainContent = styled.main`
  
`;

export default function Layout({ location, children }) {
  return (
    <>
      <Wrapper>
        <Typography />
        <GlobalStyles />
        <header>header</header>
        <MainContent>{children}</MainContent>
        <footer>footer</footer>
      </Wrapper>
    </>
  );
}