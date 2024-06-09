FROM node:lts-alpine

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .
RUN npm run build
EXPOSE 10000
CMD ["npm", "run", "preview"]