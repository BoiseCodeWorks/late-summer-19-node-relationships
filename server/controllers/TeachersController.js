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



  constructor() {
    this.router = express.Router()
      .get('', this.getAllTeachers)
      .post('', this.createTeacher)
  }
}