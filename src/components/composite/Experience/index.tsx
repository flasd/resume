import React from 'react';
import {
  Enumeration,
  Section,
  SectionHeading,
  SectionSubHeading,
  SectionText,
  SectionTitle,
} from '../../Typography';
import { Block } from 'baseui/block';

export default function Experience() {
  return (
    <>
      <SectionTitle>Experience</SectionTitle>

      <Section>
        <SectionHeading>Senior Frontend Engineer</SectionHeading>
        <SectionSubHeading>Novatics (Appen) / Jan 2020 - Now</SectionSubHeading>

        <SectionText>
          I developed the project architecture now used in most new Appen
          frontends, using React, Redux and Sagas. I’m also leading the
          development of a component library written in TypeScript.
        </SectionText>

        <Enumeration>
          <li>
            Projects were organized in a FLUX architecture usign Redux as the
            source of truth and Redux-Saga and its generators pointing to a
            Spring Boot REST backend.
          </li>
          <li>
            Our biggest challenge was to keep the old UI working alongside the
            new implementation, since JSPs and React apps work in totally
            diffrent ways.
          </li>
          <li>
            We choose to use TypeScript for the component library for better
            documentation prouposes and implemented components using the
            Override Pattern for flexibility.
          </li>
        </Enumeration>
      </Section>

      <Section>
        <SectionHeading>Senior Frontend Engineer</SectionHeading>
        <SectionSubHeading>Escolare / Fev 2020 - Oct 2020</SectionSubHeading>

        <SectionText>
          I developed both the frontend, using React and Typescript, and the
          backend, usign Firebase Cloud Functions and Hasura GraphQL. I also
          implemented a school-focused live-video chat feature using NodeJS
          (with Socket.IO), Mediasoup and WebRTC.
        </SectionText>

        <Enumeration>
          <li>
            We used a Container + Component pattern with both Recompose and
            Hooks. As our GraphQL client, we choose Apollo.
          </li>
          <li>
            I helped plan and design most of the screens for the app (usign
            Figma) as we didn’t have any designers on our team.
          </li>
        </Enumeration>
      </Section>

      <Section>
        <SectionHeading>Frontend Engineer</SectionHeading>
        <SectionSubHeading>
          CooperSystem (IPEA) / Aug 2018 - Jan 2020
        </SectionSubHeading>

        <SectionText>
          I joined the project two sprints in and the code was very messy, using
          jQuery patterns in a React app. I rewrote most of the code usign the
          FLUX architecture, with Redux Form for input management and Redux
          Thunk for side-effects.
        </SectionText>

        <Enumeration>
          <li>
            We implemented Continues Integration & Delivery with Jenkins usign
            Docker containers. It was the best deploy experience I ever had.
          </li>
        </Enumeration>
      </Section>

      <Section>
        <SectionHeading>Frontend Engineer</SectionHeading>
        <SectionSubHeading>
          Connect (Sebrae) / Oct 2019 - Jan 2020
        </SectionSubHeading>

        <SectionText>
          I developed both the Courses and Events modules for their native app
          usign React Native. I also organized and implemented their Git into a
          Feature Branch + Pull Requests workflow.
        </SectionText>

        <Enumeration>
          <li>
            The project was not following any single design pattern. I encourage
            them to use the Container + Component one with Recompose and Formik.
          </li>
          <li>
            Our biggest challenge was to integrate code from 20+ developers
            working at the same time in the same app.
          </li>
        </Enumeration>
      </Section>
    </>
  );
}
