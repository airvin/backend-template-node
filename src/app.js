import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import indexRouter from './routes/index'
import mongoose from 'mongoose'

// Connect to mongo
mongoose.Promise = global.Promise
const mongoDB = 'mongodb://127.0.0.1/my_database'
mongoose.connect(mongoDB, { useNewUrlParser: true }, err => {
    if (!err) {
        console.log("MongoDB connected!");
    }
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Close the mongo connection on app 
process.on('SIGINT', function() {
    console.log("Closing MongoDB connection...");
    mongoose.connection.close();
    console.log("MongoDB disconnected on app termination");
    process.exit(0);
});


const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public')))

app.use('/', indexRouter)

export default app
