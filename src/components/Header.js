import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { ImMenu } from 'react-icons/im';
import MobileLangugeChanger from './MobileLanguageChanger';
import DesktopLangugeChanger from './DesktopLanguageChanger';
import { ContainerStyles } from '../styles/ContainerStyles';
import { QUERIES } from '../constants';

const HeaderStyles = styled.header`
  font-weight: 800;
  font-size: 14px;
  padding: 1rem 0;
`;

const HeaderContainerStyles = styled(ContainerStyles)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HamburgerStyles = styled(ImMenu)`
  @media ${QUERIES.tabletAndUp} {
    visibility: hidden;
  }
`;

export default function Header() {
  return (
    <>
      <HeaderStyles>
        <HeaderContainerStyles>
          <MobileLangugeChanger />
          <DesktopLangugeChanger />
          <Logo />
          <HamburgerStyles size={30} onClick={() => console.log('open menu')} />
        </HeaderContainerStyles>
      </HeaderStyles>
    </>
  );
}
