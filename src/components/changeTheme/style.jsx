import styled, { keyframes, css } from "styled-components";

const ligthCercleAnimation = keyframes`
 from{
  scale: 50;
 }
 to {
  scale: 0;
 }
`;
export const ChangeThemeWrapper = styled.div`
  position: fixed;
  left: 1em;
  bottom: 1em;
  z-index: -1;
`;
export const ChangeThemeContainer = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 1em;
  left: 1em;
  display: flex;
  z-index: 1;
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

const ThemeAnimation = {
  dark: css`
    scale: 50;
    transition: scale 1000ms ease-in;
  `,
  light: css`
    scale: 0;
    transition: scale 800ms ease-out;
  `,
};

export const ThemeCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  background-color: hsla(247, 21%, 8%, 1);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  transform-origin: center center;
  ${({ themeType }) => ThemeAnimation[themeType]}
  z-index: -1;
`;
