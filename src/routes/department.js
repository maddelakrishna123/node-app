const express = require('express')

const deptrouter = express.Router();


deptrouter.get('',(req,res)=>{
    res.send('Hello Department!')
})



module.exports = deptrouter;