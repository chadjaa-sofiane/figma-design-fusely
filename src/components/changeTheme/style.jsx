import styled from "styled-components";

export const ChangeThemeContainer = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 1em;
  left: 1em;
  display: flex;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: #fff;
    border-radius: 50%;
    animation: appear 100ms forwards ease-in;
  }
  @keyframes appear {
    to {
      opacity: 1;
    }
  }
`;
