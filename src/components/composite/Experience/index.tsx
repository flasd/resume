import React from 'react';
import {
  Enumeration,
  Link,
  Section,
  SectionHeading,
  SectionSubHeading,
  SectionText,
  SectionTitle,
} from '../../Typography';

export default function Experience() {
  const [readMore, setReadMore] = React.useState(false);

  const handleReadMore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setReadMore(!readMore);
  };

  return (
    <>
      <SectionTitle>Experience</SectionTitle>

      <Section>
        <SectionHeading>Senior Fullstack Engineer</SectionHeading>
        <SectionSubHeading>Opensea / Oct 2022 - Now</SectionSubHeading>

        <SectionText>
          At OpenSea I've concentrated on optimizing the performance of their
          Django GraphQL and Next.js application. This involved a significant
          reduction of the page sizes by over 4 times and a 3-second decrease in
          the initial page load time!
        </SectionText>

        <Enumeration>
          <li>
            I've utilized caching techniques and intelligent data loading in
            GraphQL, which improved the efficiency of API requests by over 20%,
            reducing the backend load and significantly enhancing the overall
            system performance.
          </li>
          <li>
            Successfully migrated some of OpenSea's Next.js pages from
            Server-Side Rendering (SSR) to Incremental Static Regeneration
            (ISR), which substantially improved the application's performance
            and scalability. The transition enabled more efficient handling of
            traffic spikes and greatly helped to address the effects of DDOS
            attacks.
          </li>
          <li>
            Integrated LD (Linked Data) schema into the application, which
            improved data interconnectivity and enhanced SEO performance. This
            implementation, specifically targeted towards Google Shopping, led
            to a significant increase in organic traffic from search engine
            results, boosting product visibility and contributing to increased
            transaction numbers.
          </li>
        </Enumeration>
        <SectionText>
          <br />
          <strong>Skills:</strong> Django, GraphQL, Next.js, TypeScript,
          JavaScript, React, Performance Optimization.
        </SectionText>
      </Section>
      <Section>
        <SectionHeading>Senior Fullstack Engineer</SectionHeading>
        <SectionSubHeading>ContentFly / Mar 2021 - Oct 2022</SectionSubHeading>

        <SectionText>
          Built the first AI-powered content generation tool, integrating their
          AngularJs, Webpack, and Stylus frontend, their NodeJs, Express, and
          Sequelize backend with GPT-3 providing state-of-the-art content
          generation tools.
        </SectionText>

        <Enumeration>
          <li>
            Engineered and tested prompts that would bring the best results from
            GPT-3, allowing the company to offer ideas, titles, and content
            draft generation.
          </li>
          <li>
            Integrated the platform with PaymentRails, using their SDK and Jest
            to unit test the integration, allowing crowd payouts at scale which
            gave the company the posibility to scale the number of writers on
            the platform and catch over 10k USD in fraud.
          </li>
          <li>
            Rewrote a 4-year-old AngularJs app into VueJs, allowing the app to
            take advantage of code splitting and giving developers a better Dx.
          </li>
        </Enumeration>
        <SectionText>
          <br />
          <strong>Skills:</strong> AngularJs, Vue 3, NodeJs, Express, Sequelize,
          Jest.
        </SectionText>
      </Section>
      <Section>
        <SectionHeading>Senior React Frontend Engineer</SectionHeading>
        <SectionSubHeading>
          Novatics (Appen) / Jan 2020 - Mar 2021
        </SectionSubHeading>

        <SectionText>
          I developed the project architecture now used in most new Appen
          frontends, using React, Redux and Sagas. I’m also leading the
          development of a component library written in TypeScript.
        </SectionText>

        <Enumeration>
          <li>
            Projects were organized in a FLUX architecture using Redux as the
            source of truth and Redux-Saga and its generators pointing to a
            Spring Boot REST backend.
          </li>
          <li>
            Our biggest challenge was to keep the old UI working alongside the
            new implementation, since JSPs and React apps work in totally
            different ways.
          </li>
          <li>
            We choose to use TypeScript for the component library for better
            documentation purposes and implemented components using the Override
            Pattern for flexibility.
          </li>
        </Enumeration>
      </Section>

      {!readMore && (
        <Link href="#" onClick={handleReadMore}>
          Show more
        </Link>
      )}

      {readMore && (
        <>
          <Section>
            <SectionHeading>React Frontend Engineer</SectionHeading>
            <SectionSubHeading>
              Escolare / Fev 2020 - Oct 2020
            </SectionSubHeading>

            <SectionText>
              I developed both the frontend, using React and Typescript, and the
              backend, using Firebase Cloud Functions and Hasura GraphQL. I also
              implemented a school-focused live-video chat feature using NodeJS
              (with Socket.IO), Mediasoup and WebRTC.
            </SectionText>

            <Enumeration>
              <li>
                We used a Container + Component pattern with both Recompose and
                Hooks. As our GraphQL client, we choose Apollo.
              </li>
              <li>
                I helped plan and design most of the screens for the app (using
                Figma) as we didn’t have any designers on our team.
              </li>
            </Enumeration>
          </Section>
          <Section>
            <SectionHeading>React Frontend Engineer</SectionHeading>
            <SectionSubHeading>
              CooperSystem (IPEA) / Aug 2018 - Jan 2020
            </SectionSubHeading>

            <SectionText>
              I joined the project two sprints in and the code was very messy,
              using jQuery patterns in a React app. I rewrote most of the code
              using the FLUX architecture, with Redux Form for input management
              and Redux Thunk for side effects.
            </SectionText>

            <Enumeration>
              <li>
                We implemented Continues Integration & Delivery with Jenkins
                using Docker containers. It was the best deployment experience I
                ever had.
              </li>
            </Enumeration>
          </Section>
          <Section>
            <SectionHeading>React Native Engineer</SectionHeading>
            <SectionSubHeading>
              Connect (Sebrae) / Oct 2019 - Jan 2020
            </SectionSubHeading>

            <SectionText>
              I developed both the Courses and Events modules for their native
              app using React Native. I also organized and implemented their Git
              into a Feature Branch + Pull Requests workflow.
            </SectionText>

            <Enumeration>
              <li>
                The project was not following any single design pattern. I
                encourage them to use the Container + Component one with
                Recompose and Formik.
              </li>
              <li>
                Our biggest challenge was to integrate code from 20+ developers
                working at the same time in the same app.
              </li>
            </Enumeration>
          </Section>
        </>
      )}
    </>
  );
}
