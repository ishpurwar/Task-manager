const mongoose = require('mongoose')
//create schema for tasks
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [30, 'name can not be more than 20 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
})
//export model for tasks in which mongoose.model('Task', TaskSchema) means that we are creating a model named Task and it will have the schema TaskSchema
module.exports = mongoose.model('Task', TaskSchema)