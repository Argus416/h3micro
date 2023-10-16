FROM node:18-alpine

WORKDIR /client

EXPOSE 5173

COPY . ./

RUN npm install

CMD ["npm", "run", "dev"]