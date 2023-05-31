const express = require('express');
const app = express();

const path = require('path')

const employee = require('./routes/employee.js')
const department  = require('./routes/department.js')
app.use('/employee',employee);
app.use('/department',department);
app.use(express.static('public'))
app.listen(3000,()=>{
    console.log('Server started on 3000 port');
})