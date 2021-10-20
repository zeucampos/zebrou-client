import { preset } from "@rebass/preset";
import React, { createContext, useEffect, useState } from "react";
import { withRouter } from "react-router";
import { ThemeProvider } from "styled-components";
import Flex from "../../components/share/Flex";
import DefaultPage from "../../components/theme/DefaultPage";
import theme from "../../resources/util/theme";
import { ChevronsUp } from "react-feather";
import Overlay from "../../components/share/Overlay/Overlay";

const HomeView = (props) => {
  const [games, setGames] = useState([]);
  const [openOverlay, setOpenOverlay] = useState();
  const [selectedGame, setSelectedGame] = useState();

  useEffect(() => {
    setGames([
      { title: "Flamengo x Vasco", classe: "A", data: "10/11/2022" },
      { title: "Fluminense x Palmeiras", classe: "A", data: "10/11/2022" },
      { title: "Barcelona x Real Madrid", classe: "A", data: "10/11/2022" },
    ]);
  }, []);

  return (
    <ThemeProvider theme={preset}>
      <Overlay
        open={openOverlay}
        onOutsideClick={() => setOpenOverlay(false)}
        title={selectedGame?.title}
      >
        {selectedGame?.title}
      </Overlay>
      <DefaultPage
        title="Olá!"
        subtitle="Aqui você pode encontrar os melhores jogos para fazer suas apostas."
      >
        <Flex flexDirection="column" gap={theme.spacing.sm}>
          <hr />
          <Flex gap={theme.spacing.sm} alignItems="center">
            <ChevronsUp size="16px" color={theme.colors.success} />
            <h4>em alta</h4>
          </Flex>
          {games.map((e) => {
            return (
              <Flex
                {...{
                  padding: theme.spacing.sm,
                  gap: theme.spacing.sm,
                  background: theme.colors.light,
                  alignItems: "center",
                  border: "1px solid black",
                  borderRadius: theme.spacing.sm,
                  onClick: () => {
                    setOpenOverlay(true);
                    setSelectedGame(e);
                  },
                }}
              >
                <Flex
                  {...{
                    background: theme.colors.primary,
                    borderRadius: theme.spacing.sm,
                    padding: theme.spacing.md,
                    color: "white",
                  }}
                >
                  <h4>{e.classe}</h4>
                </Flex>

                <Flex flexDirection="column">
                  <h4>{e.title}</h4>
                  <small>{e.data}</small>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </DefaultPage>
    </ThemeProvider>
  );
};

export default withRouter(HomeView);
