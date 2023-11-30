FROM node:18

RUN apk update && apk upgrade

ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT

WORKDIR /app

ADD . .

RUN yarn install && yarn cache clean

CMD [ "yarn", "start" ]
