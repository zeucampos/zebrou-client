import React from "react";
import { withRouter } from "react-router";
import Flex from "../../components/share/Flex";
import DefaultPage from "../../components/theme/DefaultPage";

const SignupPage = () => {
  return (
    <DefaultPage
      title="Bem-vindo(a) ao Zebrou!"
      subtitle="informe os dados abaixo para prosseguir"
    >
      <Flex gap="32px">
        <Flex gap="8px">
          <p>sobre você</p>
          <input type="text" placeholder="Nome e sobrenome" name="name" />
          <input type="text" placeholder="Nome de usuário" name="username" />
          <input type="text" placeholder="Telefone" name="phone" />
          <input type="text" placeholder="E-mail" name="email" />
        </Flex>
        <Flex gap="8px">
          <p>segurança</p>
          <input type="password" placeholder="Senha" name="password" />
          <input
            type="password"
            placeholder="Confirmação de senha"
            name="confirm-password"
          />
        </Flex>
      </Flex>
    </DefaultPage>
  );
};

export default withRouter(SignupPage);
