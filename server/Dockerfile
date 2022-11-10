FROM node

WORKDIR /server

COPY package*.json /app/
RUN npm install

COPY . /server/

EXPOSE 5000
CMD [ "npm", "start"]