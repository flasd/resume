import styled from '@emotion/styled';

export const PageContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin: 0 auto;

  @media screen and (max-width: 1250px) {
    padding: 0px;
  }
`;
export const ContentWrapper = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  margin: 0 0 0 auto;
  max-width: 720px;
  padding: 32px;
`;

export const SidebarWrapper = styled.div`
  background-color: #f8f8f8;
  flex: 3;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SidebarContainer = styled.div`
  max-width: 400px;
  padding: 32px 0;
`;
