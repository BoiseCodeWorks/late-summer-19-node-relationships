//NOTE This file never really changes
import mongoose from 'mongoose'

const connectionString = 'mongodb+srv://student:student@cluster0-wtsis.mongodb.net/school?retryWrites=true&w=majority'

let connection = mongoose.connection

mongoose.connect(connectionString, {
  useNewUrlParser: true
})

//NOTE log any errors 
connection.on('error', err => {
  console.error('[DATABASE ERROR]:', err)
})

//NOTE Confirm connection
connection.once('open', () => {
  console.log("Connected to the DB!")
})