import React from 'react';
import { LayoutBase, PageContainer } from './styled';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <PageContainer>
      <LayoutBase>{children}</LayoutBase>
    </PageContainer>
  );
}
