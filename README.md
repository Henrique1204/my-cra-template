# `@henrique1204/create-react-app`

Esse CRA utiliza o [Create React App](https://github.com/facebook/create-react-app) original como base para criação da estrutura.

Criado por [@henrique1024](https://github.com/Henrique1204/my-cra-template).

## Dependências usadas no projeto.

### `Styled Components`

Utilizado para criação dos estilos dentro do projeto.

Veja documentação do [styled-components](https://styled-components.com/docs) para mais informações.

### `Jest` e `Testing Library`

Utilizado para criação dos testes unitários dentro do projeto.

Veja documentação do [jest](https://jestjs.io/pt-BR/docs/getting-started) e [testing-library](https://testing-library.com/docs/) para mais informações.

### `Docz`

Utilizado para documentação dos componentes e hooks dentro do projeto.

Veja documentação do [docz](https://www.docz.site/docs/getting-started) para mais informações.

## Scripts do projeto.

No diretório raiz do projeto:

### `npm start` ou `yarn start`

Inicia o projeto em modo de desenvolvimento.

O projeto será aberto na url [http://localhost:3000](http://localhost:3000) dentro do navegador.

O projeto irá ser atualizado cada vez que um arquivo seja alterado.

Os erros e avisos do eslint aparecerão no terminal caso existam.

### `npm run build`

Compila o aplicativo para produção na pasta `build`.

Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes.

Seu aplicativo está pronto para ser implantado!

Veja a seção sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) Para maiores informações.

### `npm run eject` ou `yarn eject`

**Nota: esta é uma operação unidirecional. Uma vez que você `eject`, você não pode voltar!**

Se você não estiver satisfeito com a ferramenta de compilação e as opções de configuração, poderá `eject` a qualquer momento. Este comando removerá a dependência de compilação única do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc) diretamente em seu projeto para que você tenha controle total sobre eles. Todos os comandos, exceto `eject`, ainda funcionarão, mas eles apontarão para os scripts copiados para que você possa ajustá-los. Neste momento você está por sua conta.

Você não precisa usar `eject`. O conjunto de recursos com curadoria é adequado para implantações pequenas e médias, e você não deve se sentir obrigado a usar esse recurso. No entanto, entendemos que essa ferramenta não seria útil se você não pudesse personalizá-la quando estiver pronto para isso.

### `npm run clear-cache` ou `yarn clear-cache`

Utilizado para limpar o cache do `node_modules` e da documentação gerada pelo `Docz`.

**Nota: Esse comando só funciona em terminais bash.**

### `npm test` ou `yarn test`

Executa os testes de modo que ele atualize os resultados a cada arquivo alterado e exibe todas as saídas do terminal.

Veja a seção sobre [executar testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm test:clear` ou `yarn test:clear`

Limpa o cache do jest.

### `npm test:silent` ou `yarn test:silent`

Executa os testes de modo que ele atualize os resultados a cada arquivo alterado e exibe apenas o resultado dos testes.

### `npm test:coverage` ou `yarn test:coverage`

Gera o relatório de cobertura dos testes, para exibir o quanto `(%)` do seu projeto está testado.

### `npm docs` ou `yarn docs`

Inicia a documentação do projeto pelo `docz`.

A documentação será aberta na url [http://localhost:4000](http://localhost:4000) dentro do navegador.

### `npm docs:clear` ou `yarn docs:clear`

Inicia a documentação do projeto pelo `docz` e remove o cache de versões anteriores.

A documentação será aberta na url [http://localhost:4000](http://localhost:4000) dentro do navegador.

**Nota: Esse comando só funciona em terminais bash.**

## Mais informação

O projeto contém mais informações em outros `readmes` dentro das pastas de estrutura do projeto.

Esse projeto é algo pessoal, infelizmente por isso não temos um documentação ou outra fonte de guia para se trabalhar com ele, porém ele foi criado apenas para facilitar a criação da estrutura base dos projetos, daqui pra frente é livre a utilização e modificação deste projeto assim como você queira.

Exemplo da estrutura criada [aqui](https://github.com/Henrique1204/project-model-react-ts).
