import express from 'express';
import Todo from '../models/Todo.js';

const router = express.Router();

// const { email, password } = req.body;
// const user = await User.findOne({ email });
// if (user && (await user.matchPassword(password))) {...

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find().sort({ isCompleted: false });
    res.status(200).json(todos);
  } catch (err) {
    res.status(404).json({ message: 'Tasks not found' });
  }
});

// NEEDED?
router.get('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.status(200).json(todo);
  } catch (err) {
    res
      .status(404)
      .json({ message: `Couldn't find task with ID ${req.params.id}` });
  }
});

// isCompleted value added automatically
router.post('/', async (req, res) => {
  try {
    const todo = await Todo.create({
      task: req.body.task,
      isCompleted: false,
    });
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// fields wo new data should not change to null
router.patch('/:id', async (req, res) => {
  try {
    console.log('req.body', req.body);
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      // req.body,
      {
        $set: req.body,
        // $set: {
        //   task: req.body.task,
        //   isCompleted: req.body.isCompleted,
        // },
      },
      { runValidators: true, new: true }
    );
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndRemove(req.params.id);
    // return removed todo, so it can be filtered out of state; orig 204 = nothing to return
    res.status(200).json({ data: todo });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
