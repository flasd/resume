import React from 'react';
import { Heading, SubHeading } from '../../Typography';
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
        Senior <strong>JavaScript</strong> Engineer
      </SubHeading>
    </Block>
  );
}
