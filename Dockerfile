FROM node:20-alpine

WORKDIR /app

COPY package.json yarn.lock /app/ 

RUN corepack enable

RUN yarn

COPY . /app/ 

EXPOSE 5000

RUN yarn build

CMD [ "yarn", "start" ]


