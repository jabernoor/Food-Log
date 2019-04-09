
FROM node:latest
WORKDIR /www/node/apps/food-server
COPY package.json ./

# Run npm install - install the npm dependencies
RUN npm install

# Copy application source
COPY . .

# Copy .env.docker to workdir/.env - use the docker env

EXPOSE 5000

CMD ["npm","start"]