FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Default command to run the application
CMD ["npm", "start"]
