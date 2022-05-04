import React from "react";

import * as Styles from "./index.styled";

const Home: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.Title>
        Seja bem vindo ao meu template de{" "}
        <Styles.Spotlight>cra</Styles.Spotlight>
      </Styles.Title>

      <Styles.Intro>
        Esse projeto é algo pessoal feito com o intuito de ter uma forma rápida
        de criar uma estrutura boa de projeto e ter testes unitários e
        documentação pré configurados.
      </Styles.Intro>

      <Styles.Footer>
        <Styles.Credits>
          criado por{" "}
          <Styles.CreditsLink href="https://github.com/Henrique1204">
            @henrique1204
          </Styles.CreditsLink>
        </Styles.Credits>
      </Styles.Footer>
    </Styles.Container>
  );
};

export default Home;
