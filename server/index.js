// Handle API
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/todoapp', { 
    useNewUrlParser: true, useUnifiedTopology: true 
}).then(() => console.log("Connected to MongoDB")).catch(console.error);

// Import the model
const Todo = require('./model/Todo');

// GET all Todos: request to localhost/todos
app.get('/tasks', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST a new Todo
app.post('/tasks', async (req, res) => {
  try {
    const newTodo = new Todo({ 
      title: req.body.title 
    });
    
    newTodo.save();
    res.json(newTodo);
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// DELETE a Todo
app.delete('/tasks/:id', async (req, res) => {
  try {
    const delOK = await Todo.findByIdAndDelete(req.params.id);
    res.json(delOK);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Complete a Todo
app.put('/tasks/:id', async (req, res) => {
  try {
    const updatedTodo = await Todo.findById(req.params.id);
    updatedTodo.complete = !updatedTodo.complete;
    updatedTodo.save();
    res.json(updatedTodo);
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Define routes for your to-do API
app.listen(3000, () => {
  console.log(`Server is running`);
});
