import styled from "styled-components";

export const NavBarWrapper = styled.div`
  width: 80em;
  max-width: 100%;
  margin: 2.5em auto;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  justify-content: space-around;
`;
