import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const MainContent = styled.main``;

export default function Layout({
  location,
  children,
  footer: { disclaimerText },
  header,
}) {
  return (
    <>
      <Wrapper>
        <Header location={location} header={header} />
        <MainContent>{children}</MainContent>
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
