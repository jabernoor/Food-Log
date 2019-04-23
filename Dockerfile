FROM node:latest
WORKDIR /www/node/apps/food-server


# Run npm install - install the npm dependencies
COPY ./package.json ./package.json

RUN npm install

RUN npm install pm2 -g

RUN pm2 link au1sb9qgew1n4hq 4ockgy74d36pn2n docker-food-log

COPY . .
# COPY ./node_modules ./node_modules
# Copy .env.docker to workdir/.env - use the docker env

# Copy application source

COPY ./.env.docker ./.env


EXPOSE 5000

# pm2 start -n food-log -i 1 ./build/index.js
CMD ["pm2-runtime","start","-n","food-log","-i","4","npm","--","start"]