#Dockerfile is for create de docker image
FROM node:16

#Create app directory
WORKDIR /usr/src/app

#install app dependencies
COPY package*.json ./

RUN npm install

#Bundle app source
COPY . .

RUN npm run build

EXPOSE 5000

CMD ["npm", "run", "start:prod"]