import express from 'express'
import _teachersService from '../services/TeachersService.js'

export default class TeachersController {

  async createTeacher(req, res, next) {
    try {
      let teacher = await _teachersService.create(req.body)
      res.send(teacher)
    } catch (err) { next(err) }
  }

  async getAllTeachers(req, res, next) {
    try {
      let teachers = await _teachersService.find()
      res.send(teachers)
    } catch (err) { next(err) }
  }

  async getTeacher(req, res, next) {
    try {
      let teacher = await _teachersService.findById(req.params.teacherId).populate('subject students')
      res.send(teacher)
    }
    catch (err) { next(err) }
  }

  async addStudent(req, res, next) {
    try {
      let teacher = await _teachersService.findById(req.params.teacherId)
      teacher.students.push(req.body.studentId)
      await teacher.save(err => {
        if (err) {
          next(err)
        }
      })
      res.send(teacher)
    } catch (err) { next(err) }
  }


  constructor() {
    this.router = express.Router()
      .get('', this.getAllTeachers)
      .get('/:teacherId', this.getTeacher)
      .post('', this.createTeacher)
      .put('/:teacherId/students/', this.addStudent)
    // .put('/:teacherId', this.editTeacher)
  }
}