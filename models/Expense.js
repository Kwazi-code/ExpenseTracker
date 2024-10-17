// Expense.js
const mongoose = require('mongoose');

// Define the schema for an expense
const ExpenseSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create the model using the schema
const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = Expense;
