const mongoose = require('mongoose')

const Schema = mongoose.Schema

const expenseSchema = new Schema({
    item: String,
    amount: Number,
    date: Date,
    group: String
})

const Expense = mongoose.model('Expense', expenseSchema)

module.exports = Expense