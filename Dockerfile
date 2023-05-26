FROM node:16.13.1-slim
WORKDIR /It_Prep/drone_service
COPY package.json /It_Prep/drone_service/.
RUN npm install
COPY . .
EXPOSE 8181

CMD ["npm", "start"]