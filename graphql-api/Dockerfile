FROM node:11.12.0

WORKDIR /www/node/apps/food-server


# Run npm install - install the npm dependencies
COPY ./package.json ./package.json

RUN npm install

RUN npm install pm2 -g

# RUN pm2 link au1sb9qgew1n4hq 4ockgy74d36pn2n docker-food-log


COPY . .

COPY ./.env.docker ./.env
# COPY ./node_modules ./node_modules
# Copy .env.docker to workdir/.env - use the docker env

# Copy application source

RUN npm run build


# ENV DB_HOST=mysql
# ENV DB_PORT=3306

EXPOSE 5000


# pm2 start -n food-log -i 1 ./build/index.js
CMD ["node","./build/bin/www.js"]
# CMD ["pm2-runtime","start","-n","food-log","-i","4","./build/bin/www.js"]