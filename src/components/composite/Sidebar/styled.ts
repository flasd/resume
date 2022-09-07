import styled from '@emotion/styled';

interface SidebarBaseProps {
  windowHeight: number;
  sidebarOpen: boolean;
}

export const SidebarBase = styled.aside<SidebarBaseProps>`
  box-sizing: border-box;
  padding: 48px;
  width: 340px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    border: none;
    position: fixed;
    top: 0px;
    max-width: 480px;
    right: ${(props) => (props.sidebarOpen ? '0px' : '-480px')};
    overflow: auto;
    background-color: white;
    height: ${(props) => `${props.windowHeight}px`};
  }
`;

export const SidebarTriggerContainer = styled.button`
  display: none;

  position: fixed;
  top: 0px;
  right: 0px;
  font-size: 28px;
  padding: 16px 16px 8px;
  border-bottom-left-radius: 8px;
  background-color: white;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;

  & > svg {
    position: relative;
    top: 6px;
    color: #4d4d4d;
  }

  & > a {
    display: inline-block;
    margin-left: 16px;
  }
`;

export const ProfilePicture = styled.img`
  display: block;
  width: 180px;
  margin: 0 auto 64px;
  border-radius: 8px
`;

export const ItemContainer = styled.div`
  margin-bottom: 14px;
`;
