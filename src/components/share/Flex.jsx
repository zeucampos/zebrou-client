import React from "react";
import styled from "styled-components";

const Flex = (props) => {
  return <FlexWrapper {...props}>{props.children}</FlexWrapper>;
};

const FlexWrapper = styled.div`
  display: ${(props) => props.display ?? "flex"};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};
  flex: ${(props) => props.flex};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.borderRadius};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  position: ${(props) => props.position ?? "relative"};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
`;

export default Flex;
