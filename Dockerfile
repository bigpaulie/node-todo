FROM node:16-alpine as build

WORKDIR /app
COPY . .

RUN npm i && npm run build

ENTRYPOINT node dist/app.js