import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-plugin-sanity-image';
import ExternalLink from './ExternalLink';
import { QUERIES } from '../constants';

const FooterStyles = styled.footer`
  margin-top: auto;
  padding: 20px;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 14px;
  padding: 1rem 0;
  border-top: 1px solid;

  @media ${QUERIES.tabletAndUp} {
    border-top: none;

    &:nth-of-type(1) {
      border-top: 1px solid;
    }

    &:nth-of-type(2) span,
    &:nth-of-type(3) span {
      border-top: 1px solid;
      padding: 1rem 0;
    }
  }
`;

const LinkStyles = styled(ExternalLink)`
  color: var(--clr-black);
  font-weight: 800;
  font-size: 14px;
  text-decoration: none;
  display: inline-block;

  span {
    background-color: var(--clr-pink);
    padding: 2px 4px;
  }
`;

const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
  align-items: center;
  gap: 1rem;
  margin: 2rem auto;
  max-width: 200px;

  @media ${QUERIES.tabletAndUp} {
    max-width: revert;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem auto;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    justify-content: center;
  }
`;

const InterregGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = ({
  footer: {
    disclaimerText,
    text2,
    partnersText,
    interregLogo,
    viaCarpatiaLogo,
    buildingPartnershipLogo,
    developmentFundLogo,
    fmzLogo,
    skhuUrl,
    viaCarpatiaUrl,
  },
}) => {
  return (
    <FooterStyles>
      <FooterText>{disclaimerText}</FooterText>
      <FooterText>
        <span>{text2}</span>
      </FooterText>
      <FooterText>
        <span>{partnersText}</span>
      </FooterText>
      <LogoContainer>
        <Image {...fmzLogo.image} alt={fmzLogo.altText} />
        <Image {...viaCarpatiaLogo.image} alt={viaCarpatiaLogo.altText} />
        <InterregGroup>
          <Image {...interregLogo.image} alt={interregLogo.altText} />
          <Image
            {...buildingPartnershipLogo.image}
            alt={buildingPartnershipLogo.altText}
          />
        </InterregGroup>
        <Image
          {...developmentFundLogo.image}
          alt={developmentFundLogo.altText}
        />
      </LogoContainer>
      <LinkContainer>
        <LinkStyles href={skhuUrl.url}>
          <span>{skhuUrl.displayText}</span>
        </LinkStyles>
        <LinkStyles href={viaCarpatiaUrl.url}>
          <span>{viaCarpatiaUrl.displayText}</span>
        </LinkStyles>
      </LinkContainer>
    </FooterStyles>
  );
};

export default Footer;
