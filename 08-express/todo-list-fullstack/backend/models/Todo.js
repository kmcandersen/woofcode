import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
  task: {
    type: String,
    required: true,
    minlength: 3,
  },
  isCompleted: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
