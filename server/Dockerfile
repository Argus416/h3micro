FROM node:18

WORKDIR /usr/src/server

COPY package*.json ./

RUN yarn global add nodemon

RUN yarn install

COPY . .

USER node

EXPOSE 8000

CMD [ "nodemon", "index.js" ]