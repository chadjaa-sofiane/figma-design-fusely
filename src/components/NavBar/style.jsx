import styled from "styled-components";

export const NavBarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakPoints["tablet"]}) {
    flex: 1;
    padding: 0 2.5em;
  }
`;

export const LinksField = styled.nav`
  flex: 1;
  display: grid;
  place-items: center;
  ul {
    width: 26.125em;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${({theme}) => theme.colors.bg  };
    z-index: 1;
    cursor: pointer;
    li {
      position: relative;
      font-size: 1rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.neutral["300"]};
      font-family: "Open Sans";
      padding: 0.5em 0;
      &:hover {
        color: ${({ theme }) => theme.colors.neutral["500"]};
        &::after {
          width: 100%;
        }
      }
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 0.2em;
        background-color: ${({ theme }) => theme.colors.primary["300"]};
        transition: width 100ms ease-out;
      }
    }
  }
`;

export const ButtonsField = styled.div`
  min-width: 16.125em;
  display: flex;
  justify-content: center;
  column-gap: 1em;
`;

export const MenuBarBtn = styled.label`
  cursor: pointer;
  display: none;
  #close_icon_svg__close_icon {
    width: 0;
    opacity: 0;
  }
`;

export const NavBarContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg};
  transition: opacity 200ms ease-in;
`;

export const MenuBtnInput = styled.input``;

export const NavBarWrapper = styled.div`
  position: relative;
  width: 80em;
  max-width: 100%;
  margin: 2.5em auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg};
  ${MenuBtnInput}:checked ~ & {
    ${NavBarContent} {
      visibility: visible;
      opacity: 1;
    }
    ${MenuBarBtn} {
      #burger_icon_svg__burger_icon {
        width: 0;
        opacity: 0;
      }
      #close_icon_svg__close_icon {
        width: unset;
        opacity: 1;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakPoints["tablet"]}) {
    padding: 0;
    ${NavBarContent} {
      position: absolute;
      top: calc(100% + 2.844em);
      width: 100%;
      visibility: hidden;
      opacity: 0;
      flex-direction: column;
      ${LinksField} {
        ul {
          padding: 3.75em 0;
          flex-direction: column;
          row-gap: 1.875em;
        }
      }
      ${ButtonsField} {
        margin-top: 10.625em;
      }
    }
    ${MenuBarBtn} {
      display: block;
    }
  }
`;
