import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  name: { type: String, required: true },
  //NOTE one to many, one teacher hs many students
  students: [{ type: ObjectId, ref: 'Student' }],
  subject: { type: ObjectId, ref: "Subject", required: true }
}, { timestamps: true })

export default mongoose.model('Teacher', _schema)