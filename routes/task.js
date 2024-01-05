const express = require('express');
const router = express.Router();
//get all tasks function from controller
const {
    getallTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
} = require('../controller/tasks');
//api points
router.route('/').get(getallTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);
//export router
module.exports = router;
