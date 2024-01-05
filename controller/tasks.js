// Purpose: To handle all the tasks related routes
//export Task schema from models/model.js which contains the schema for tasks
const Task = require("../models/model.js");
const { createCustomError } = require("../errors/customAPIError");
const asyncWrapper = require("../middleware/async");
//get all tasks function from controller
const getallTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({ tasks });
});

//create task function from controller
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});
//get task function from controller
const getTask = asyncWrapper(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    return next(createCustomError(`No task with id : ${req.params.id}`, 404));
  }
  res.status(200).json({ task });
});
//update task function from controller
const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }

  res.status(200).json({ task });
});
//delete task function from controller
const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json({ task });
});
//export all functions TO routes/task.js
module.exports = {
  getallTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
