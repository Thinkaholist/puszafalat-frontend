import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { QUERIES } from '../constants';
import { defaultLang } from '../config';

const Wrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    gap: 1rem;
  }
`;

const LanguageCodeStyes = styled(Link)`
  text-decoration: none;
  display: block;
  color: ${(p) => (p.sl === p.lang ? 'var(--clr-black)' : 'darkgray')};
`;

export default function DesktopLangugeChanger({ location: { pathname } }) {
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLang);

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

  return (
    <>
      <Wrapper>
        <LanguageCodeStyes
          to={getLocale(pathname, '')}
          sl={selectedLanguage}
          lang='hu'
        >
          HU
        </LanguageCodeStyes>
        <LanguageCodeStyes
          to={getLocale(pathname, 'en')}
          sl={selectedLanguage}
          lang='en'
        >
          EN
        </LanguageCodeStyes>
        <LanguageCodeStyes
          to={getLocale(pathname, 'sk')}
          sl={selectedLanguage}
          lang='sk'
        >
          SK
        </LanguageCodeStyes>
      </Wrapper>
    </>
  );
}

export function getLocale(pathname, code) {
  // ->  /
  // ->  /en
  // ->  /receptek
  // ->  /en/receptek
  // ->  /falat/a-gyuru-hol
  // ->  /en/falat/a-gyuru-hol
  if (pathname === '/') return `/${code}`;
  if (pathname === '/en') return `/${code}`;
  if (pathname === '/sk') return `/${code}`;
  if (pathname === '/receptek') {
    return `${code === '' ? '' : `/${code}`}/receptek`;
  }
  if (pathname === '/en/receptek') {
    return `${code === '' ? '' : `/${code}`}/receptek`;
  }
  if (pathname === '/sk/receptek') {
    return `${code === '' ? '' : `/${code}`}/receptek`;
  }
  if (pathname.startsWith('/en')) {
    return pathname.replace('/en', code === '' ? '' : `/${code}`);
  }
  if (pathname.startsWith('/sk')) {
    return pathname.replace('/sk', code === '' ? '' : `/${code}`);
  }
  return code === '' ? pathname : `/${code}${pathname}`;
}
