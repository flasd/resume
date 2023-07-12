import React from 'react';
import { FaGithub, FaNpm } from 'react-icons/fa';
import { Section, SectionTitle } from '../../Typography';
import {
  OpenSourceContainer,
  OpenSourceProjectContainer,
  IconContainer,
  InformationContainer,
  ProjectName,
  ProjectDescription,
  ProjectLink,
  ProjectText,
} from './styled';

export default function OpenSourceProjects() {
  return (
    <Section>
      <SectionTitle>Open Source Projects</SectionTitle>
      <OpenSourceContainer>
        <OpenSourceProjectContainer>
          <InformationContainer>
            <ProjectName>
              <IconContainer>
                <FaNpm />
              </IconContainer>
              CPFCheck
            </ProjectName>
            <ProjectDescription>Brazilian ID validation</ProjectDescription>
            <ProjectLink
              href="https://www.npmjs.com/package/cpf-check"
              target="_blank"
              rel="noopener noreferrer"
            >
              npmjs/cpf-check
            </ProjectLink>
            <ProjectText>
              6k+ monthly downloads
              <br />
              Functions to validate and generate random
              <br />
              CPF numbers. It grew into something way
              <br />
              bigger than I anticipated.
            </ProjectText>
          </InformationContainer>
        </OpenSourceProjectContainer>
        <OpenSourceProjectContainer>
          <InformationContainer>
            <ProjectName>
              <IconContainer>
                <FaNpm />
              </IconContainer>
              Strip Invariant
            </ProjectName>
            <ProjectDescription>Babel plugin</ProjectDescription>
            <ProjectLink
              href="https://www.npmjs.com/package/babel-plugin-strip-invariant"
              target="_blank"
              rel="noopener noreferrer"
            >
              npmjs/babel-plugin-strip-invariant
            </ProjectLink>
            <ProjectText>
              2k+ monthly downloads
              <br />
              Created when I was studying ASTs and
              <br />
              how transpiling JS works. It searches
              <br />
              and fixes Invariant calls.
            </ProjectText>
          </InformationContainer>
        </OpenSourceProjectContainer>
        <OpenSourceProjectContainer>
          <InformationContainer>
            <ProjectName>
              <IconContainer>
                <FaNpm />
              </IconContainer>
              Express Yup middleware
            </ProjectName>
            <ProjectDescription>
              Schema validation for Express
            </ProjectDescription>
            <ProjectLink
              href="https://www.npmjs.com/package/@flasd/express-yup-middleware"
              target="_blank"
              rel="noopener noreferrer"
            >
              npmjs/express-yup-middleware
            </ProjectLink>
            <ProjectText>
              ~500 monthly downloads
              <br />
              Created to allow the amazing Yup schema
              <br />
              validation to be used on Express.
            </ProjectText>
          </InformationContainer>
        </OpenSourceProjectContainer>
        <OpenSourceProjectContainer>
          <InformationContainer>
            <ProjectName>
              <IconContainer>
                <FaGithub />
              </IconContainer>
              Fireplate
            </ProjectName>
            <ProjectDescription>
              React boilerplate for Firebase
            </ProjectDescription>
            <ProjectLink
              href="https://github.com/flasd/fireplate"
              target="_blank"
              rel="noopener noreferrer"
            >
              github/fireplace
            </ProjectLink>
            <ProjectText>
              Created before CRA was a thing
              <br />
              Useful for deploying server-side rendered React apps to Firebase.
            </ProjectText>
          </InformationContainer>
        </OpenSourceProjectContainer>
      </OpenSourceContainer>
    </Section>
  );
}
