FROM node:10.15-stretch

WORKDIR /usr/app

COPY . .

RUN npm install

ENTRYPOINT ["npm", "start"]