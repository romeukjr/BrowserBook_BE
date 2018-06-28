criado um  documento com o resumo da aplicação (objetivo, funcionalidades, limitações) e com comentários sobre os conceitos, recursos utilizados, dificuldades encontradas e percepções que considerar relevantes sobre o framework empregado no desenvolvimento backend.


# BrowserBook - Back End
## A Social Media app that only works in your browser

This project a simple prototype to expose an API to [another project](https://github.com/Arthuravila/BrowserBook/) which already has the front-end application.

This project uses Angular to build an HTML5 application, with CSS and Javascript as well. Bootstrap is also used in the project.
The Backend uses MongoDB and ExpressJS to store and persist the data in the backend. NodeJS is used to run the application. 

> Authors: [Arthur Àvila](https://github.com/Arthuravila), [Isaque Azevedo](https://github.com/isaqueha) e [Romeu Klering Junior](https://github.com/romeukjr).

## Objective

Create a prototype that mocks the functionality of a social media application.

## Features

- Post creation & visualization;
- Comments on posts;
- Upvotes/Downvotes on each post;
- Date and time of the post/comment;
- User Login;
- Active Users List.

To create new Posts, the application validates if the user is logged in.

### Limitations

The Backend is serving everything, but the Frontend has not fully integrated the connection to it.

To create new entries in the database, you can use Postman to do the HTTP calls.

This Social Media app does not have a chat functionality.

## Installation

Make sure you have [MongoDB](https://www.mongodb.com/download-center), [Node.js and npm](https://nodejs.org/en/download/) installed.

Then, clone or download this repository, navigate to its root folder and run:

> npm install

## Running the Application in development server
To run this back-end application it is necessary to run mongodb, which is our database, and the server, which will expose our API.

### Openning MongoDB
First of all, start mongodb. To do so, go to the mongo installation folder and navigat to `MongoDB\<version>\bin`, then open two terminals.
In the first one, run:
> mongod

and in the second one:
> mongo

### Starting the server
To start the server, jus go to the repository root folder and run:
> node server.js
