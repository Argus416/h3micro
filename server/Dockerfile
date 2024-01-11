FROM node:18

WORKDIR /usr/src/server

COPY package*.json ./

RUN npm i -g pnpm nodemon

RUN pnpm install

COPY . .

USER node

EXPOSE 8000

CMD [ "nodemon", "index.js" ]