FROM node:alpine

ENV APP_HOME /myapp

WORKDIR $APP_HOME

COPY package.json ./

RUN yarn

ADD . $APP_HOME

EXPOSE 8080