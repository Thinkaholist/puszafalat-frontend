import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Header from './Header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const MainContent = styled.main``;

export default function Layout({ location, children }) {
  return (
    <>
      <Wrapper>
        <Typography />
        <GlobalStyles />
        <Header />
        <MainContent>{children}</MainContent>
        <footer
          style={{
            marginTop: 'auto',
            padding: 20,
            backgroundColor: 'var(--clr-black)',
            color: 'white',
          }}
        >
          footer
        </footer>
      </Wrapper>
    </>
  );
}
