import express from 'express'
import _subjectsService from '../services/SubjectsService.js'

export default class SubjectsController {

  async createSubject(req, res, next) {
    try {
      let subject = await _subjectsService.create(req.body)
      res.send(subject)
    } catch (err) { next(err) }
  }

  async getAllSubjects(req, res, next) {
    try {
      let subjects = await _subjectsService.find()
      res.send(subjects)
    } catch (err) { next(err) }
  }



  constructor() {
    this.router = express.Router()
      .get('', this.getAllSubjects)
      .post('', this.createSubject)
  }
}