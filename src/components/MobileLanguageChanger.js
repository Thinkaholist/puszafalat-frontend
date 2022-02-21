import React, { useState, useEffect } from 'react';
import { Link, navigate } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import { GrClose as Close } from 'react-icons/gr';
import { QUERIES, FLAGS } from '../constants';
import { defaultLang } from '../config';
import { getLocale } from './DesktopLanguageChanger';

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
  backdrop-filter: blur(2px);
  z-index: 2;
  user-select: none;
  transition: background-color 0.3s ease-out;
  animation: ${SlideIn} 0.5s ease-in-out;

  padding: 30px;
  display: flex;
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
  flex-direction: column;
  gap: 2rem;

  svg {
    width: 100px;
    height: 100px;
  }
`;

const FlagButton = styled.button`
  border: none;
  padding: 0 12.5px;
  background-color: transparent;

  border: ${(p) =>
    p.sl === p.lang ? '2px solid var(--clr-blue)' : '2px solid transparent'};
`;

export default function MobileLangugeChanger({ location: { pathname } }) {
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLang);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
