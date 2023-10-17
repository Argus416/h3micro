FROM node:18-alpine

WORKDIR /usr/src/client

COPY package.json ./

RUN yarn install

EXPOSE 5173
EXPOSE 5174

ENV WEBSITES_PORT=5173
ENV DEBUG=true
ENV PORT=5173

CMD ["npm", "run", "dev"]