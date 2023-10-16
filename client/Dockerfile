FROM node:18-alpine

WORKDIR /usr/src/client

COPY package.json ./

RUN yarn global add nodemon

RUN yarn install

EXPOSE 3000
EXPOSE 3010

CMD ["npm", "run", "dev"]