import React, { useRef } from "react";
import useOutsideClick from "../../../resources/hooks/useOutsideClick";
import theme from "../../../resources/util/theme";
import Flex from "../Flex";
import { OverlayWrapper, Overlay } from "./Overlay.style";
import { X } from "react-feather";

const Fade = require("react-reveal/Fade");

export default function Modal(props) {
  const wrapperRef = useRef();

  useOutsideClick(wrapperRef, props.onOutsideClick);

  return (
    <>
      {props.open && (
        <OverlayWrapper>
          <Overlay ref={wrapperRef}>
            <Flex
              padding={theme.spacing.md}
              gap={theme.spacing.sm}
              flexDirection="column"
              width="100%"
            >
              <Flex justifyContent="space-between" padding="0 16px">
                <h4>{props.title}</h4>

                <X />
              </Flex>
              <Flex flexDirection="column" padding="0 16px">
                {props.children}
              </Flex>
            </Flex>
          </Overlay>
        </OverlayWrapper>
      )}
    </>
  );
}
