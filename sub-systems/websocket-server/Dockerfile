FROM node:latest as builder
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build
RUN rm -rf node_modules

FROM node:latest
WORKDIR /app

COPY --from=builder app/. .

RUN npm install --production
EXPOSE 4000
ENTRYPOINT [ "node", "./build/index.js" ]
