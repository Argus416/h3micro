FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm i -g pnpm nodemon

RUN pnpm install

COPY . .

USER root

EXPOSE 8000

CMD [ "nodemon", "index.js" ]