FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# build source code langsung saat build image
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
