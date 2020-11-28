import React from 'react';
import { Heading, SubHeading } from '../../Typography';
import { Block } from 'baseui/block';

export default function Header() {
  return (
    <Block as="header" marginBottom="78px">
      <Block marginBottom="16.5px">
        <Heading>
          <strong>Marcel</strong>
          <br />
          Coelho
        </Heading>
      </Block>
      <SubHeading>
        Senior <strong>JavaScript</strong> Engineer
      </SubHeading>
    </Block>
  );
}
