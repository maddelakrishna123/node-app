const mongoose = require('mongoose');
const employeeSchema =  mongoose.Schema({
    'id':{type:Number},
    'name':{type:String},
    'email':{type:String},
    'salary':{type:Number},
     'age':{type:Number}}
   );

const EmployeeModel = mongoose.model('Employee',employeeSchema);

module.exports = EmployeeModel;