FROM node:16.14
RUN apt update
RUN apt install lsof
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./
ENTRYPOINT [ "npm", "run" ]
CMD [ "dev" ]