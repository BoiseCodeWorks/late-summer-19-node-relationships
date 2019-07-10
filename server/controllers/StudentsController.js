import express from 'express'
import _studentsService from '../services/StudentsService.js'

export default class StudentController {

  async createStudent(req, res, next) {
    try {
      let student = await _studentsService.create(req.body)
      res.send(student)
    } catch (err) { next(err) }
  }

  async getAllStudents(req, res, next) {
    try {
      let students = await _studentsService.find()
      res.send(students)
    } catch (err) { next(err) }

    //NOTE same thing as above
    // _studentsService.find().then(students => {
    //   res.send(students)
    // }).catch(err => { next(err) })
  }



  constructor() {
    this.router = express.Router()
      .get('', this.getAllStudents)
      .post('', this.createStudent)
  }
}