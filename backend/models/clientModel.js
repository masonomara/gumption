const mongoose = require('mongoose')

const Schema = mongoose.Schema

const clientSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  }
}, { timestamps: true })

module.exports = mongoose.model('Client', clientSchema)