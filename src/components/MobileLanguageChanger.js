import React, { useState, useEffect } from 'react';
import { Link, navigate } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import { GrClose as Close } from 'react-icons/gr';
import { QUERIES, FLAGS } from '../constants';
import { defaultLang } from '../config';
import { getLocale } from './DesktopLanguageChanger';
import { getUrl, getReceptekUrl } from './Header';

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const MobileLanguageChangerStyles = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
`;

const SlideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  
  to {
    transform: translateY(0%);
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--clr-background);
  z-index: 2;
  user-select: none;
  transition: background-color 0.3s ease-out;
  animation: ${SlideIn} 0.5s ease-in-out;

  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  button#closeBtn {
    border: none;
    background-color: transparent;

    position: absolute;
    top: 20px;
    left: 20px;
  }
`;

const FlagContainer = styled.div`
  display: flex;
  gap: 1rem;

  svg {
    width: 50px;
    height: 50px;
  }
`;

const FlagButton = styled.button`
  border: none;
  padding: 0 6.25px;
  background-color: transparent;

  border: ${(p) =>
    p.sl === p.lang ? '2px solid var(--clr-blue)' : '2px solid transparent'};
`;

const MenuItems = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 28px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MenuItem = styled.li`
  a {
    color: inherit;
    text-decoration: none;
    border-bottom: ${(p) => (p.selected ? '2px solid' : '')};
    font-weight: ${(p) => (p.selected ? 700 : 500)};
  }
`;

const Line = styled.hr`
  background-color: var(--clr-black);
  width: 100%;
  height: 2px;
`;

export default function MobileLangugeChanger({
  location,
  recipesMenuItemText,
  pageTitle,
}) {
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLang);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { pathname } = location;

  useEffect(() => {
    if (pathname.startsWith('/en')) {
      setSelectedLanguage(() => {
        return 'en';
      });
    } else if (pathname.startsWith('/sk')) {
      setSelectedLanguage(() => {
        return 'sk';
      });
    } else {
      setSelectedLanguage(() => {
        return 'hu';
      });
    }
  }, [pathname]);

  const openMobileMenu = () => {
    setShowMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  const changeMobileLanguage = (path) => {
    navigate(path);
    closeMobileMenu();
  };

  return (
    <Wrapper>
      <MobileLanguageChangerStyles onClick={openMobileMenu}>
        {FLAGS[selectedLanguage]}
      </MobileLanguageChangerStyles>
      {showMobileMenu && (
        <MobileMenu>
          <button onClick={closeMobileMenu} id='closeBtn'>
            <Close size={30} />
          </button>
          <MenuItems>
            <MenuItem selected={pathname.length < 4}>
              <Link to={getUrl(pathname)}>{pageTitle}</Link>
            </MenuItem>
            <MenuItem selected={pathname.includes('receptek')}>
              <Link to={`${getReceptekUrl(pathname)}/receptek`}>
                {recipesMenuItemText}
              </Link>
            </MenuItem>
          </MenuItems>
          <Line />
          <FlagContainer>
            <FlagButton
              onClick={() => changeMobileLanguage(getLocale(pathname, ''))}
              to={getLocale(pathname, '')}
              sl={selectedLanguage}
              lang='hu'
            >
              {FLAGS.hu}
            </FlagButton>
            <FlagButton
              onClick={() => changeMobileLanguage(getLocale(pathname, 'sk'))}
              sl={selectedLanguage}
              lang='sk'
            >
              {FLAGS.sk}
            </FlagButton>
            <FlagButton
              onClick={() => changeMobileLanguage(getLocale(pathname, 'en'))}
              sl={selectedLanguage}
              lang='en'
            >
              {FLAGS.en}
            </FlagButton>
          </FlagContainer>
        </MobileMenu>
      )}
    </Wrapper>
  );
}
