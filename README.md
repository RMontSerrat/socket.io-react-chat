# Socket.io React Chat

Web Chat using Socket.io and React;

## Running with docker
1. `cp server/.env.default server/.env` (And alter vars as needed)
2. `cp client/.env.default client/.env` (And alter vars as needed)`
3. `docker-compose up --build`

## Server

1. `cd server`
2. `cp .env.default .env` (And alter vars as needed)
3. `npm install`
4. `npm start`

## Running server tests

- `npm test`


## Client

1. `cd client`
2. `cp .env.default .env` (And alter vars as needed)
3. `npm install`
4. `npm start`

## Running client tests

- `npm test`

## Running storybook

- `npm run storybook`


## Building client for production

1. `cp .env.default .env` (And change vars as needed)
2. `npm install --production`
3. `npm run build`
