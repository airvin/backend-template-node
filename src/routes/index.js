import express from 'express'
import bodyParser from 'body-parser'
import { getUsers, createUser } from '../controllers/user'

var router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

// user routes
router.get('/users', getUsers)
router.post('/user/new', bodyParser.json(), createUser)

export default router
