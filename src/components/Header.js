import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { ImMenu as HamburgerIcon } from 'react-icons/im';
import MobileLangugeChanger from './MobileLanguageChanger';

const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 800;
  font-size: 14px;
`;

export default function Header() {
  return (
    <>
      <HeaderStyles>
        <MobileLangugeChanger />
        <Logo />
        <HamburgerIcon size={30} />
      </HeaderStyles>
    </>
  );
}
