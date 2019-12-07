# The Notes App
This is a basic express CRUD example app.

## Requirements
1. Install git
2. Install docker
3. Install nodejs
4. Install postman to test the API

It is not required to install the MongoDB service because we are using a containerized mongodb.

## Run Development
To run the project in development mode just follow the next steps:

* Clone the repository into your local machine
```bash
git clone https://github.com/jorovipe97/express-mongoose-docker-crud.git
```
* Move to the repository folder
```bash
cd express-mongoose-docker-crud
```
* Run the development server with:
```bash
docker-compose up
```
## Using the API
If you want an easy way to test the API it's highly recommended to use the Postman collection I've tailored.

## Deploy
The docker-compose up command will generate an Dockerfile file which you can use to build an image and upload to the cloud (e.g: Amazon Fargate)
```bash
docker build -t the-notes-app:latest .
```
