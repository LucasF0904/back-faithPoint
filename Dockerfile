FROM node:14

# Cria a pasta raiz da aplicacao
WORKDIR /app

# Copia as configuracoes para a pasta /app
COPY package.json ./
COPY tsconfig.json ./

# Copia o codigo fonte para app/src
COPY src /app/src

# Instala as dependências
RUN npm install

# Compila a aplicação
RUN npm run build

# Instala o TypeORM
RUN npm install typeorm -g

# Executa as migrations
CMD npm run typeorm migration:run

EXPOSE 3000

CMD npm start
