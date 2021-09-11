FROM node:14.17.1-buster-slim

WORKDIR /app

COPY ./package.json /app/

RUN yarn install

COPY . /app/

EXPOSE 8000

CMD [ "yarn", "develop", "-H", "0.0.0.0" ]