import React from "react";
import { Box, Flex } from "rebass";
import Overlay from "../../components/share/Overlay/Overlay";
import DefaultPage from "../../components/theme/DefaultPage";

const GroupPage = (props) => {
  return (
    <DefaultPage title={props.title} subtitle={props.data}>
      <Overlay>acdasd</Overlay>
      <Flex flexDirection="column" alignItems="center">
        Grupos de apostas abertos para este jogo
        <Flex>
          <Box>
            <p>Região: DF</p>
            <p>min: R$ 2,00</p>
            <p>max: R$ 40,00</p>
            <p>100 lances</p>
          </Box>
        </Flex>
      </Flex>
    </DefaultPage>
  );
};

export default GroupPage;
