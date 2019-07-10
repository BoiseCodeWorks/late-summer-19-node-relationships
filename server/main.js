import express from 'express'
import bp from 'body-parser'
import './db/dbconfig'
let port = 3000

let server = express()

server.use(bp.json())


//NOTE Register our routes here at some point
import StudentsController from './controllers/StudentsController'
import TeachersController from './controllers/TeachersController'
import SubjectsController from './controllers/SubjectsController'

server.use('/api/students', new StudentsController().router)
server.use('/api/teachers', new TeachersController().router)
server.use('/api/subjects', new SubjectsController().router)

server.use((error, req, res, next) => {
  res.status(error.status || 400).send(error)
})

server.listen(port, () => {
  console.log("your server is running on port: ", port, " You better go catch it!")
})