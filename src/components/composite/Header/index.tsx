import React from 'react';
import { Heading, Link, SubHeading, SubHeadingSmall } from '../../Typography';
import { Block } from 'baseui/block';

export default function Header() {
  return (
    <Block as="header" marginBottom="78px" display="block">
      <Block marginBottom="32px">
        <Heading>
          <strong>Marcel</strong>
          <br />
          Coelho
        </Heading>
      </Block>
      <SubHeading>
        Senior <strong>Fullstack JavaScript</strong> Engineer
      </SubHeading>
      <SubHeadingSmall style={{ marginTop: 4 }}>
        5+ years of experience | Typescript & React Expert | Currently at{' '}
        <Link
          href="https://opensea.io"
          style={{
            fontSize: 'inherit',
          }}
        >
          Opensea
        </Link>{' '}
        <Link
          href="https://www.ycombinator.com/companies/opensea"
          style={{
            fontSize: 'inherit',
          }}
        >
          (YC W18)
        </Link>
      </SubHeadingSmall>
    </Block>
  );
}
