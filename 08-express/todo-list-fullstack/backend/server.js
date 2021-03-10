import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import todos from './routes/todos.js';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todos', todos);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, console.log(`server running on port ${PORT}`));
const PORT = 5000;
app.listen(PORT, console.log(`server running on port ${PORT}`));
