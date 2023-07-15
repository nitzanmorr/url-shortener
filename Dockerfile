FROM node:alpine
WORKDIR /url-shortener
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
