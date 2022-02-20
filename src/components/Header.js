import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Logo from './Logo';
// import { ImMenu } from 'react-icons/im';
// import MobileLangugeChanger from './MobileLanguageChanger';
import DesktopLangugeChanger from './DesktopLanguageChanger';
import { ContainerStyles } from '../styles/ContainerStyles';
// import { QUERIES } from '../constants';

const HeaderStyles = styled.header`
  font-weight: 800;
  font-size: 14px;
  padding: 1rem 0;
`;

const HeaderContainerStyles = styled(ContainerStyles)`
  display: flex;
  align-items: center;
  & > * {
    flex: 1;
    display: flex;
  }
`;

const HamburgerStyles = styled.div`
  justify-content: flex-end;
`;

const MenuItemLink = styled(Link)`
  justify-content: flex-end;
  color: var(--clr-black);
  text-decoration: none;
  font-weight: 300;
  font-size: 18px;
  span {
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.2s linear;
    background-color: ${(p) =>
      p.pathname.includes('/receptek') ? 'var(--clr-pink)' : 'transparent'};
    padding: 6px 10px 4px;
    border-radius: 16px;
    box-shadow: ${(p) =>
      p.pathname.includes('/receptek')
        ? '2px 2px 0 0 var(--clr-black)'
        : 'none'};
  }

  &:hover span {
    border-bottom: 1px solid;
  }
`;

const LogoLink = styled(Link)`
  justify-content: center;
`;

const DesktopLanguageChangerStyles = styled(DesktopLangugeChanger)``;

export default function Header({ location, header: { recipesMenuItemText } }) {
  const { pathname } = location;

  return (
    <>
      <HeaderStyles>
        <HeaderContainerStyles>
          <DesktopLanguageChangerStyles location={location} />
          {/* <MobileLangugeChanger /> */}
          <LogoLink to={getUrl(pathname)}>
            <Logo />
          </LogoLink>
          <MenuItemLink
            to={`${getReceptekUrl(pathname)}/receptek`}
            pathname={pathname}
          >
            <span>{recipesMenuItemText}</span>
          </MenuItemLink>
          {/* <HamburgerStyles>
            <ImMenu size={30} onClick={() => console.log('open menu')} />
          </HamburgerStyles> */}
          {/* <div style={{ justifyContent: 'flex-start' }}>
            <MobileLangugeChanger />
            <DesktopLanguageChangerStyles location={location} />
          </div>
          <LogoLink to={getUrl(pathname)}>
            <Logo />
          </LogoLink>
          <div style={{ flex: 1, display: 'flex' }}>
            <HamburgerStyles
              size={30}
              onClick={() => console.log('open menu')}
            />
            <MenuItemLink to={`${getReceptekUrl(pathname)}/receptek`}>
              {menuItemText}
            </MenuItemLink>
          </div> */}
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
