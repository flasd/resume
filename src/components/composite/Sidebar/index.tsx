import React, { useState } from 'react';
import {
  ItemContainer,
  LinkContainer,
  ProfilePicture,
  SidebarBase,
  SidebarTriggerContainer,
} from './styled';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaBars } from 'react-icons/fa';
import marcel from '../../../assets/marcel.jpg';
import {
  Link,
  SectionTitle,
  SidebarHeading,
  SidebarText,
} from '../../Typography';
import { Button } from 'baseui/button';
import { useWindowHeight } from '@react-hook/window-size';
import OpenSourceProjects from '../OpenSourceProjects';

export default function Sidebar() {
  const windowHeight = useWindowHeight();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handlePrint = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.print();
  };

  return (
    <SidebarBase sidebarOpen={sidebarOpen} windowHeight={windowHeight}>
      <SidebarTriggerContainer onClick={() => setSidebarOpen((open) => !open)}>
        <FaBars />
      </SidebarTriggerContainer>
      <ProfilePicture src={marcel} />

      <section>
        <LinkContainer>
          <FaEnvelope />
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:hello@marcelcoelho.com"
          >
            hello@marcelcoelho.com
          </Link>
        </LinkContainer>

        {/* <LinkContainer>
          <FaPhone />
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="tel:+5561999354900"
          >
            +55 61 9 9935-4900
          </Link>
        </LinkContainer> */}

        <LinkContainer>
          <FaGithub />
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/flasd"
          >
            github.com/flasd
          </Link>
        </LinkContainer>

        <LinkContainer>
          <FaLinkedinIn />
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/flasd"
          >
            linkedin.com/in/flasd
          </Link>
        </LinkContainer>
      </section>

      <section>
        <SectionTitle>Skills</SectionTitle>
        <ItemContainer $bold>JavaScript</ItemContainer>
        <ItemContainer $bold>TypeScript</ItemContainer>
        <ItemContainer $bold>React</ItemContainer>
        <ItemContainer>GraphQL</ItemContainer>
        <ItemContainer>NodeJs</ItemContainer>
        <ItemContainer>Express</ItemContainer>
        <ItemContainer>Jest</ItemContainer>
      </section>

      <section>
        <SectionTitle>Education</SectionTitle>
        <ItemContainer>
          <SidebarText>Bachelor</SidebarText>
          <SidebarHeading>Computer engineering</SidebarHeading>
          <SidebarText>Universidade de Brasilia, Brazil</SidebarText>
          2017 - 2019
        </ItemContainer>
      </section>

      <section>
        <SectionTitle>Talks</SectionTitle>
        <ItemContainer>
          <SidebarHeading>React is not reactive</SidebarHeading>
          <SidebarText>For 200+ people at BrasilJS Event</SidebarText>
          2019
        </ItemContainer>
        <ItemContainer>
          <SidebarHeading>JS Generators and Sagas</SidebarHeading>
          <SidebarText>For 100+ people at ReactBSB</SidebarText>
          2020
        </ItemContainer>
      </section>

      <OpenSourceProjects />

      <Button
        onClick={handlePrint}
        kind="secondary"
        href="#"
        overrides={{
          Root: {
            style: {
              backgroundColor: 'transparent',
              border: '1px solid #747474',
              color: 'black',
              width: '100%',
              textAlign: 'center',
            },
          },
        }}
      >
        Download PDF Version
      </Button>
    </SidebarBase>
  );
}
