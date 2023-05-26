# drone_service

To start the service : 
    1. npm install 
    2. npm start

# API DOC

Please Use editor.swagger (https://editor.swagger.io/) for api documentation:
   1. API documentation link: https://github.com/spshubham/drone-service/blob/main/api_doc/api.yaml
   2. Copy and paste the content of API doc into editor.swagger
   3. Service is hosted, Use API documentation directly to execute all API's.


# Docker file

1. Build the docker file. (cmd : docker build -t drone_service .)
2. start and run the container using above image. (cmd: docker run -itp 8181:8181 drone_service)
3. service available on: http://localhost:8181