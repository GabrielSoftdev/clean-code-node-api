# clean-node-api
API em NodeJs usando Typescript, TDD, Clean Architecture, Design Patterns e SOLID principles

## Bibliotecas usadas

- [Git Commit Message Linter:](https://github.com/legend80s/commit-msg-linter) 
  - o "ESlint do git", ajuda a manter um padrão na escrita dos commits, inviabilizando a conclusão do comando e disparando erros quando algo fugir do padrão.
  - ![Flags:](https://raw.githubusercontent.com/legend80s/commit-msg-linter/master/assets/demo-7-compressed.png)
- [Husky:](https://typicode.github.io/husky/#/) 
  - automatiza disparos de comandos habitualmente lançados antes dos commits, exemplo, checkagem de testes, uma ultima varredura do código com eslint, stylelint e etc.
- [Lint-Staged:](https://github.com/okonet/lint-staged) 
  - permite a realização do Liting (eslint, stylelint, entre outros) de um modo restritivo, por exemplo, em um projeto com mais de 1000 arquivos, apenas aqueles que sofreram modificações.
  - usado juntamente com o [Husky](https://typicode.github.io/husky/#/) garantindo que os arquivos em processo de "commitagem" estarão testados e aprovados.

 