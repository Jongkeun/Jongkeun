import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
body {
  background-color: #003b00;
  padding: 1em 2em;
  background-image: ${props =>
    props.backgroundImage ? `url("./images/code_bg.png")` : "none"};
  background-size: cover;
}
`;

export default GlobalStyle;
