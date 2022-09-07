import React from 'react';
import Sidebar from '../composite/Sidebar';
import {
  ContentContainer,
  ContentWrapper,
  PageContainer,
  SidebarContainer,
  SidebarWrapper,
} from './styled';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <PageContainer>
      <ContentWrapper>
        <ContentContainer>{children}</ContentContainer>
      </ContentWrapper>
      <SidebarWrapper>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
      </SidebarWrapper>
    </PageContainer>
  );
}
