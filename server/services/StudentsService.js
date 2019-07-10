import mongoose from 'mongoose'

let _schema = new mongoose.Schema({
  name: { type: String, required: true },
  gradeLevel: { type: Number, default: 0 }
}, { timestamps: true })

export default mongoose.model('Student', _schema)