import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Header from './Header';
import { ContainerStyles } from '../styles/ContainerStyles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const MainContent = styled.main``;

export default function Layout({
  location,
  children,
  disclaimerText,
  menuItemText,
}) {
  return (
    <>
      <Wrapper>
        <Typography />
        <GlobalStyles />
        <Header location={location} menuItemText={menuItemText} />
        <MainContent>
          <ContainerStyles>{children}</ContainerStyles>
        </MainContent>
        <footer
          style={{
            marginTop: 'auto',
            padding: 20,
            backgroundColor: 'var(--clr-black)',
            color: 'white',
          }}
        >
          {disclaimerText}
        </footer>
      </Wrapper>
    </>
  );
}
