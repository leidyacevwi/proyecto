FROM node:20.11.1-alpine3.18 AS base

ENV NODE_ENV=local

WORKDIR /app

COPY src/package*.json .

RUN npm install && npm cache clean --force

COPY src .

FROM base AS local

CMD npm run dev
