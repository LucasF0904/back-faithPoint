FROM node:14

# Cria a pasta raiz da aplicacao
WORKDIR /app

# Copia as configuracoes para a pasta /app
COPY package.json ./
COPY tsconfig.json ./

# Copia o codigo fonte para app/src
COPY src /app/src

# Lista os arquivos
RUN ls -a

RUN npm install
RUN npm run build

EXPOSE 3000

CMD npm start
