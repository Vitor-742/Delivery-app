FROM node:16-alpine

WORKDIR /app-backend

COPY ./package*.json .

RUN npm config set unsafe-perm true

RUN ["npm", "install", "--force"]

COPY ./ /app-backend

RUN chown -R node /app-backend/node_modules

USER node

EXPOSE 3001

CMD ["npm", "run", "dev"]