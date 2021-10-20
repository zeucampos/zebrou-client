import styled, { keyframes } from "styled-components";
import theme from "../../../resources/util/theme";

const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

const SlideUp = keyframes`  
  from { bottom: -100%;  }
  to { bottom: 0; opacity: 1; }
`;

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
  background: white;
  border-radius: ${theme.spacing.md};
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  min-height: 80vh;
  z-index: 20;
  opacity: 0;
  animation: ${SlideUp} 300ms ease-in forwards;
`;

const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.1);
  animation: ${FadeInAnimation} 300ms ease-in;
`;
export { OverlayWrapper, Overlay };
