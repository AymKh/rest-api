# rest-api
Fully functioning REST API, built with Node, Express, ejs and Mongodb

### Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installation

Here's how to setup the up to run on a local env
installing packages

```
npm install
```
This will install all dependencies mentioned in package.json

run on local server

```
node server.js
```
/or

```
nodemon server.js
```
### Routes
Path                | HTTP Verb | Purpose      
------------------- | --------- | ----------------------------------:
/posts              | GET       | List all posts    
/posts/:id          | GET       | Show info about one post      
/posts/new          | GET       | Show new post form      
/posts              | POST      | Create a new post, then redirect      
/posts/:id/update   | GET       | Show edit form for one post      
/posts/:id          | PUT       | Update one post, then redirect      
/posts/:id          | DELETE    | Delete one post then redirect      
 

### Preview
[![Deployed demo on heroku](http://g.recordit.co/ztQ52Rnozf.gif)]()

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](LICENSE)**
- Copyright 2020 © <a href="https://aymkh.tn/" target="_blank">AymKh</a>.
