FROM node:16

WORKDIR /usr/src/app

COPY src/app/package*.json ./

RUN npm install --only=production

COPY src/app .

EXPOSE 8080

CMD [ "node", "index.js" ]