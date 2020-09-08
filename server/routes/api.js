const express = require('express')
const mongoose = require('mongoose')
// const data = require('../../data.json')
const Expense = require('../../model/Expense')
const moment = require('moment')

const route = express()

// for(let expense of data){
//     const e = new Expense(expense)
//     e.save()
// }

route.get("/expenses", (req, res) =>{
    Expense.find({})
    .sort({date: -1})
    .then(function(expenses){
        res.send(expenses)
    })
})

route.post("/expenses", (req, res) => {
    const e = new Expense(req.body)
    e.date?e.date = moment(e.date).format('LLLL'):e.date = moment().format('LLLL')
    e.save().then(expense => {
        Expense.find({}).count({}, (err, count) => {
            console.log(`you have ${count} expenses and bought ${expense.item} for ${expense.amount} times`);
        })
        res.send(expense)
    })
})

route.put('/update', (req, res) =>{
    const { group1, group2 } = req.body
    Expense.findOneAndUpdate({group: group1}, {$set: {group: group2}}, {new: true}, (err, updated)=>{
       res.send(`the group of ${updated.item} changed to ${updated.group}`)
    })
})

module.exports = route