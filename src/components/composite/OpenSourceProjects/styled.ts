import styled from '@emotion/styled';

export const OpenSourceContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const OpenSourceProjectContainer = styled.div`
  flex: 1;
  min-width: 273px;
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;
`;

export const IconContainer = styled.div`
  margin-right: 24px;
`;

export const InformationContainer = styled.div`
  flex: 1;
`;

export const ProjectName = styled.h5`
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 8px;
`;

export const ProjectDescription = styled.p`
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-align: left;
  color: #404040;
`;

export const ProjectText = styled.p`
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.04em;
  text-align: left;
  color: #404040;
  margin-top: 4px;
`;

export const ProjectLink = styled.a`
  display: block;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-align: left;
  color: #404040;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
