
FROM node:latest
WORKDIR /www/node/apps/food-server
ADD package.json /www/node/apps/food-server
RUN npm install
CMD ["npm","start"]