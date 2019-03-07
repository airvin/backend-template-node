# Backend Template with Node.js and Express

## Dependencies
- [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
- [babel](https://github.com/babel/babel)
- [nodemon](https://nodemon.io/)


## Project structure
```
.
├── src
│   │──app.js
│   │── bin
│       └── www.js
│   │── models
│   ├── routes
│       ├── index.js
│       └── ...
├── public
│   ├── index.html
│   └── stylesheets
│       └── style.css
├── dist

```

## Setup directory for a new project

```
git clone git@github.com:airvin/backend-template-node.git <project-name>
cd <project-name>
rm -rf .git
```

Install dependencies

```
npm install
```

## Running the server in production mode

```
npm start
```

## Running the server in dev mode
```
npm run watch
```

