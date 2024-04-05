# Node.js: API pass.in🖥️🚩

## O que é o Pass.in? ✅

O **pass.in** é uma aplicação de gestão de participantes em eventos presenciais. <br>
Foi densenvolvida durante o evento NLW Unite da **Rocketseat** na trilha back-end em Node.js com o [Diego Fernandes](https://www.instagram.com/dieegosf/?hl=pt).

### Qual o seu objetivo?
- A ferramenta permite que o organizador cadastre um evento e abra uma página pública de - inscrição.

- Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

- O sistema fará um scan da credencial do participante para permitir a entrada no evento.

## Requisitos 📄

### Requisitos Funcionais
✔️ O organizador deve ser capaz de registrar um novo evento.<br>
✔️ O organizador deve ser capaz de visualizar os dados do evento.<br>
✔️ O organizador deve ser capaz de visualizar a lista de participantes.<br>
✔️ Os participantes devem ser capazes de se inscrever em um evento.<br>
✔️ Os participantes devem ser capazes de visualizar o crachá de inscrição.<br>
✔️ Os participantes devem ser capazes de fazer check-in no evento.

### Regras de Negócio
✔️ Um participante só pode se inscrever em um evento uma vez.<br>
✔️ Um participante só pode se inscrever em eventos com vagas disponíveis.<br>
✔️ Um participante só pode fazer check-in em um evento uma vez.<br>

### Requisitos Não Funcionais
✔️ O check-in no evento será feito por meio de um código QR.

## Tecnologias compreendidas 🌐📚

Este projeto utiliza as seguintes tecnologias:

| Tecnologia     | Descrição                                                                                   |
|----------------|--------------------------------------------------------------------------------------------|
| **Node.js**        | Plataforma de desenvolvimento JavaScript que permite a execução de código JavaScript no servidor. |
| **TypeScript**     | Linguagem de programação que adiciona tipagem estática ao JavaScript.                        |
| **Fastify**        | Framework web para criação de APIs RESTful em Node.js.                                       |
| **Prisma ORM**     | Ferramenta para mapeamento objeto-relacional (ORM) que facilita a interação com bancos de dados. |
| **SQLite**         | Banco de dados relacional embutido que não requer um servidor separado.                        |
| **Zod**            | Biblioteca para validação de dados em TypeScript.                                            |
| **Swagger UI**     | Interface de documentação gerada automaticamente a partir de um arquivo Swagger ou OpenAPI.   |


## Anotações da Aula 📝

### Criação de uma API: Principais Informações💡🔍:

### Métodos HTTP

- **GET**: Utilizado para obter informações de recursos.
- **POST**: Utilizado para criar novos recursos.
- **PUT**: Utilizado para atualizar recursos existentes.
- **DELETE**: Utilizado para remover recursos.
- **PATCH**: Utilizado para fazer atualizações parciais em recursos.
- **HEAD**: Similar ao GET, mas retorna apenas os cabeçalhos da resposta.
- **OPTIONS**: Utilizado para obter informações sobre os métodos suportados pelo servidor.

### Corpo da Requisição (Request Body)

- O corpo da requisição é utilizado com rotas do tipo **POST** e **PUT**.
- Ele contém os dados que serão enviados para o servidor, como informações de criação ou atualização de recursos.

### Parâmetros de Busca (Search Params / Query Params)

- Os parâmetros de busca são utilizados para filtrar resultados em consultas.
- Por exemplo: `http://localhost:3333/users?name=Caio` busca usuários com o nome "Caio".

### Parâmetros de Rota (Route Params)

- Os parâmetros de rota são utilizados para identificar recursos específicos.
- Por exemplo: `DELETE http://localhost:3333/users/1` remove o usuário com o ID 1.

### Cabeçalhos (Headers)

- Os cabeçalhos fornecem contexto adicional para a requisição.
- Eles podem conter informações como autenticação, tipo de conteúdo, idioma, etc.


## Links 🔗

* [🔍 Rocketseat ](https://app.rocketseat.com.br/)
* [🔍 Node.js ](https://nodejs.org/en)
* [🔍 Prisma ](https://www.prisma.io/)
* [🔍 Swagger UI ](https://swagger.io/)
 





