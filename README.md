# The Notes App
This is an *Express Notes App*.

## Features
1. Containerized express, mongodb.
2. Using Mongoose for ODB.
3. Dead easy to start development server.
4. CRUD operations examples.
5. Postman tailored collections to play with the API.
6. Hot-Reloading ready with nodemon.

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

![Imgur](https://imgur.com/9ANpGbA.png)

To import the collection follow the next steps:
1. In Postman go to File > Import > Choose Files
2. Go to the the Postman folder on the root folder of the downloaded repository and select the two .json files in there
3. Finally, choose The Notes App environment on the top left of the postman UI ![Environments](https://imgur.com/q7tCKbq.png)

Now you cant start using the API from postman.

## Deploy
The docker-compose up command will generate a Dockerfile file which you can use to build an image and upload to the cloud (e.g: Amazon Fargate)
```bash
docker build -t the-notes-app:latest .
```
