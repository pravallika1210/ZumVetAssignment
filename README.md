# Node.js ZumVetAssignment


This is a user login and subscription purchasing app using Node.js, Express,and MySQL.

### Version
1.0.0


### Installation

This app requires [Node.js](https://nodejs.org/) and [MySQL](https://www.mysql.com/) to run.

```sh
$ brew install mysql
```

```sh
$ npm install -g express-generator
$ npx express --view=ejs
$ npm install
$ npm install mysql
$ npm install express-session --save
```


### Steps to run the app

```sh
$ mysql -u root -p
$ CREATE DATABASE zumvet;
$ use zumvet
$ source /LOCAL_PATH/create_login_table.sql
```

```sh
$ npm start
```

```sh
Go to http://localhost:3000/ to try the app!
```
