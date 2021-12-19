import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
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
  /* @media ${QUERIES.tabletAndUp} { */
  visibility: hidden;
  /* } */
`;

export default function Header({ location, menuItemText }) {
  const { pathname } = location;

  return (
    <>
      <HeaderStyles>
        <HeaderContainerStyles>
          <MobileLangugeChanger />
          <DesktopLangugeChanger location={location} />
          <Link to={getUrl(pathname)}>
            <Logo />
          </Link>
          <HamburgerStyles size={30} onClick={() => console.log('open menu')} />
          <Link to={`${getReceptekUrl(pathname)}/receptek`}>
            {menuItemText}
          </Link>
        </HeaderContainerStyles>
      </HeaderStyles>
    </>
  );
}

function getUrl(pathname) {
  if (pathname.startsWith('/en')) return '/en';
  if (pathname.startsWith('/sk')) return '/sk';
  return '/';
}

function getReceptekUrl(pathname) {
  if (pathname.startsWith('/en')) return '/en';
  if (pathname.startsWith('/sk')) return '/sk';
  return '';
}
