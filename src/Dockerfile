FROM node:12.18.2-alpine3.9
WORKDIR /node
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8090
CMD [ "node", "main.js"]