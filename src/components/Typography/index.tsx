import styled from '@emotion/styled';

const alginToCenterOnMobile = `
  @media screen and (max-width: 1023px) {
    text-align: center;
  }
`;

const justifyOnMobile = `
  @media screen and (max-width: 1023px) {
    text-align: justify;
  }
`;

export const Heading = styled.h1`
  font-family: 'Lato';
  font-size: 57px;
  font-style: normal;
  font-weight: 300;
  line-height: 69px;
  letter-spacing: 0.12em;
  text-align: left;
  text-transform: uppercase;
  color: #000000;

  ${alginToCenterOnMobile}

  & > strong {
    font-family: 'Lato';
    font-size: 57px;
    font-style: normal;
    font-weight: 400;
    line-height: 69px;
    letter-spacing: 0.12em;
    text-align: left;
    text-transform: uppercase;
    color: #000000;
  }
`;

export const SubHeading = styled.h2`
  font-family: Lato;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.12em;
  text-align: left;
  text-transform: uppercase;
  color: #000000;

  ${alginToCenterOnMobile}
`;

export const Section = styled.section`
  margin-bottom: 48px;
`;

export const SectionTitle = styled.h3`
  font-family: Lato;
  font-size: 16.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.5px;
  letter-spacing: 0.12em;
  text-align: left;
  text-transform: uppercase;
  color: #000000;
  padding-bottom: 12px;
  border-bottom: 1px solid #dfdfdf;
  margin-top: 48px;
  margin-bottom: 32px;
`;

export const SectionHeading = styled.h4`
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.06em;
  text-align: left;
  text-transform: uppercase;
`;

export const SectionSubHeading = styled.h5`
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.06em;
  text-align: left;
  margin-bottom: 12px;
`;

export const SectionText = styled.p`
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.03em;
  text-align: left;
  color: #4d4d4d;
  margin-bottom: 20px;

  ${justifyOnMobile}
`;

export const Enumeration = styled.ul`
  list-style: disc outside;

  & > li {
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.03em;
    text-align: left;
    color: #4d4d4d;
    margin-left: 60px;
    margin-bottom: 8px;

    ${justifyOnMobile}

    @media screen and (max-width: 1023px) {
      margin-left: 24px;
    }
  }
`;

export const Link = styled.a`
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-align: left;
  color: #404040;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const SidebarHeading = styled.h5`
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.04em;
  text-align: left;
  text-transform: uppercase;
`;

export const SidebarText = styled.p`
  font-family: Lato;
  font-size: 13.5px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-align: left;
  color: #404040;
`;
