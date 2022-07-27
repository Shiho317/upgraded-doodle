import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Merriweather', serif;
}

.active {
  opacity: 0.3;
}
`;
