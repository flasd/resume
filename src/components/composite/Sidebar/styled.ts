import styled from '@emotion/styled';

export const SidebarBase = styled.aside`
  border: 1px solid #747474;
  box-sizing: border-box;
  padding: 48px;
  margin-left: 64px;
  width: 740px;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;

  & > svg {
    position: relative;
    top: 6px;
  }

  & > a {
    display: inline-block;
    margin-left: 16px;
    flex: 1;
  }
`;

export const ProfilePicture = styled.img`
  display: inline-block;
  width: 180px;
  margin-bottom: 80px;
`;

export const ItemContainer = styled.div`
  margin-bottom: 14px;
`;
