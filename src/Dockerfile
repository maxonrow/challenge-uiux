FROM node:12.18.2-alpine3.9
WORKDIR /node
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3003
CMD [ "node", "main.js"]