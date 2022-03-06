import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const MainContent = styled.main``;

export default function Layout({
  location,
  children,
  footer,
  header,
  logos,
  pageTitle,
}) {
  return (
    <>
      <Wrapper>
        <Header location={location} header={header} pageTitle={pageTitle} />
        <MainContent>{children}</MainContent>
        <Footer footer={footer} logos={logos} />
      </Wrapper>
    </>
  );
}
