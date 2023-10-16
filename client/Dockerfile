FROM node:18-alpine

WORKDIR /usr/src/client

COPY package.json ./

RUN yarn global add nodemon

RUN yarn install

EXPOSE 5173
EXPOSE 5174

CMD ["npm", "run", "dev"]