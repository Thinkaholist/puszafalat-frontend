import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Logo from './Logo';
// import { ImMenu } from 'react-icons/im';
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

  /* & > * {
    flex: 1;
    display: flex;
  } */
`;
const MenuItemLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  color: var(--clr-black);
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
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

  @media ${QUERIES.laptopAndUp} {
    font-size: 18px;
    font-weight: 300;
  }
`;

const LogoLink = styled(Link)`
  display: block;
  text-align: center;

  svg {
    display: block;
    margin: 0 auto;
  }
`;

const DesktopLanguageChangerStyles = styled(DesktopLangugeChanger)`
  /* display: none;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
  } */
`;

const MobileLangugeChangerStyles = styled(MobileLangugeChanger)``;

export default function Header({
  location,
  header: { recipesMenuItemText },
  pageTitle,
}) {
  const { pathname } = location;

  return (
    <>
      <HeaderStyles>
        <HeaderContainerStyles>
          <div style={{ flex: 1 }}>
            <DesktopLanguageChangerStyles location={location} />
            <MobileLangugeChangerStyles
              location={location}
              recipesMenuItemText={recipesMenuItemText}
              pageTitle={pageTitle}
            />
          </div>
          <LogoLink to={getUrl(pathname)} style={{ flex: 1 }}>
            <Logo />
          </LogoLink>
          <div style={{ flex: 1, justifyContent: 'flex-end' }}>
            <MenuItemLink
              to={`${getReceptekUrl(pathname)}/receptek`}
              pathname={pathname}
            >
              <span>{recipesMenuItemText}</span>
            </MenuItemLink>
          </div>
        </HeaderContainerStyles>
      </HeaderStyles>
    </>
  );
}

export const getUrl = (pathname) => {
  if (pathname.startsWith('/en')) return '/en';
  if (pathname.startsWith('/sk')) return '/sk';
  return '/';
};

export const getReceptekUrl = (pathname) => {
  if (pathname.startsWith('/en')) return '/en';
  if (pathname.startsWith('/sk')) return '/sk';
  return '';
};
