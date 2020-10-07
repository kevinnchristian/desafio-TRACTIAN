# Desafio TRACTIAN

### Dependência Backend
- Instalar Express.js: `yarn add express`
- Instalar módulo CORS: `yarn add cors`
- Instalar Nodemon: `yarn add nodemon -D`
- Instalar Mongoose: `yarn add mongoose`
- Instalar .env: `yarn add dotenv`

### Comandos utilizados:
- Para iniciar projeto node: `yarn init -y`
- Para rodar a aplicação `yarn start`, este comando irá executar o script: `nodemon ./src/bin/www`

### Software para teste:
- `Insomnia` - Testando métodos HTTP e Parâmetros.

### Observações:
- Server está rodando na porta `3335`
- O arquivo `.env` já estão com as configurações do banco, a boa prática seria criar um arquivo `.env.example` mas, para ficar mais rápido e fácil o teste de terceiros preferi deixar aplicação deste modo.