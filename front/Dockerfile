FROM node:13.10.1-alpine3.10

WORKDIR /front

COPY package.json .
COPY package-lock.json .

RUN apk update && \
    npm ci

CMD node index.js
