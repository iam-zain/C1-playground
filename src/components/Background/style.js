import styled from "styled-components";

import starryBG from "assets/starryBG.svg";
import colors from "styles/colors";

export default styled.div`
  background-image: linear-gradient(180deg, ${colors.c1} 0, ${colors.c3} 100%);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  &:after {
    background: url(${starryBG}) repeat-x;
    background-size: 42%;
    content: "";
    display: block;
    height: 76%;
    position: absolute;
    width: 100%;
  }
`;
