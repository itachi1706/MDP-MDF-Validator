FROM node:16-alpine

WORKDIR /app
ADD package.json package-lock.json ./

RUN npm install

ADD . .

EXPOSE 3000

CMD ["node", "./bin/www"]