FROM node:16-alpine

WORKDIR /app-frontend

COPY ./package*.json .

RUN npm config set unsafe-perm true

RUN ["npm", "install", "--force"]

COPY ./ /app-frontend

RUN chown -R node /app-frontend/node_modules

USER node

EXPOSE 3000

CMD ["npm", "start"]