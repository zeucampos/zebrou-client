import React from "react";
import styled from "styled-components";
import logo from "../../logo.svg";
import theme from "../../resources/util/theme";
import Flex from "../share/Flex";

const DefaultPage = (props) => {
  return (
    <DefaultPageWrapper>
      <Flex
        {...{
          gap: theme.spacing.md,
          justifyContent: "center",
          alignItems: "space-between",
          flex: "1",
          background: theme.colors.light,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "4.5em",
        }}
      >
        <img src={logo} alt="zebrou" width="56px" />
      </Flex>
      <div className="container">
        <Flex gap="8px" margin="16px 0" flexDirection="column">
          <h3 className="page-title">{props.title}</h3>
          <h4 className="page-subtitle">{props.subtitle}</h4>
        </Flex>

        {props.children}
      </div>
    </DefaultPageWrapper>
  );
};

const DefaultPageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: vertical;
  gap: 16px;
  padding-top: 5em;

  .container {
    max-width: 1233px;
    margin: 0 auto;
    height: 100%;
    padding: 0 ${theme.spacing.md};
  }

  .page-title,
  .page-subtitle {
    text-align: center;
  }
`;

export default DefaultPage;
