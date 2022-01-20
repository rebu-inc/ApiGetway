#FROM node:carbon-slim
# Create app directory
#WORKDIR /ruteame_api_gateway

# Install app dependencies
#COPY package.json /ruteame_api_gateway/
#RUN npm install

# Bundle app source
#COPY . /ruteame_api_gateway/

#UN npm run prepublish

#CMD [ "npm", "run", "runServer" ]


# PROD CONFIG
FROM node as prod

WORKDIR /app

COPY package*.json ./

RUN npm install

WORKDIR /app/client

COPY ./client/package*.json ./

RUN npm install

WORKDIR /app

COPY . .

ENV NODE_ENV=production

CMD [ "npm", "start" ]