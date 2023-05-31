const express = require('express');

const emprouter = express.Router()
/*
const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1/ems1").then(()=>{
    console.log('connected To data base')
}).catch((err)=>{
    throw err
})
const EmployeeModel = require('../models/model.employee.js')

*/
emprouter.get('',(req,res)=>{

    /* const emp = new EmployeeModel();
     emp.id = 101;
     emp.name ='krishna'
     emp.salary = 70000
*/
     /*emp.save().then((data)=>{
        console.log('saved')
     })*/
    res.json({'message':'HelloWorld'})
})



module.exports = emprouter