import React from 'react';
import {
  IconContainer,
  InformationContainer,
  ReferenceCompany,
  ReferenceContainer,
  ReferenceEmail,
  ReferenceName,
  ReferencePhone,
  ReferenceRelationship,
  ReferencesContainer,
} from './styled';
import { FaUser } from 'react-icons/fa';
import { Section, SectionTitle } from '../../Typography';

export default function References() {
  return (
    <Section>
      <SectionTitle>References</SectionTitle>
      <ReferencesContainer>
        <ReferenceContainer>
          <IconContainer>
            <FaUser />
          </IconContainer>
          <InformationContainer>
            <ReferenceName>Álvaro Souza</ReferenceName>
            <ReferenceRelationship>Co-Worker</ReferenceRelationship>
            <ReferenceCompany
              href="https://novatics.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Novatics
            </ReferenceCompany>
            <ReferencePhone href="tel:+5561998060703">
              +55 61 9 9806-0703
            </ReferencePhone>
            <ReferenceEmail href="mailto:alvaro@novatics.com.br">
              alvaro@novatics.com.br
            </ReferenceEmail>
          </InformationContainer>
        </ReferenceContainer>
        <ReferenceContainer>
          <IconContainer>
            <FaUser />
          </IconContainer>
          <InformationContainer>
            <ReferenceName>Fabrício Monteiro</ReferenceName>
            <ReferenceRelationship>Co-Worker</ReferenceRelationship>
            <ReferenceCompany
              href="https://novatics.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Novatics
            </ReferenceCompany>
            <ReferencePhone href="tel:+5561983608622">
              +55 61 9 8360-8622
            </ReferencePhone>
            <ReferenceEmail href="mailto:fabricio@novatics.com.br">
              fabricio@novatics.com.br
            </ReferenceEmail>
          </InformationContainer>
        </ReferenceContainer>
        <ReferenceContainer>
          <IconContainer>
            <FaUser />
          </IconContainer>
          <InformationContainer>
            <ReferenceName>Frederico Guerra</ReferenceName>
            <ReferenceRelationship>Manager</ReferenceRelationship>
            <ReferenceCompany
              href="https://coopersystem.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CooperSystem
            </ReferenceCompany>
            <ReferencePhone href="tel:+5561991197102">
              +55 61 9 9119-7102
            </ReferencePhone>
            <ReferenceEmail href="mailto:frederico@coopersystem.com.br">
              frederico@coopersystem.com.br
            </ReferenceEmail>
          </InformationContainer>
        </ReferenceContainer>
        <ReferenceContainer>
          <IconContainer>
            <FaUser />
          </IconContainer>
          <InformationContainer>
            <ReferenceName>Ismael Santos</ReferenceName>
            <ReferenceRelationship>Squad Lead</ReferenceRelationship>
            <ReferenceCompany
              href="https://coopersystem.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CooperSystem
            </ReferenceCompany>
            <ReferencePhone href="tel:+5561981478400">
              +55 61 9 8147-8400
            </ReferencePhone>
            <ReferenceEmail href="mailto:ismael.paiva@coopersystem.com.br">
              ismael.paiva@coopersystem.com.br
            </ReferenceEmail>
          </InformationContainer>
        </ReferenceContainer>
      </ReferencesContainer>
    </Section>
  );
}
