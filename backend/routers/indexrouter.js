const express = require('express')
const router = express.Router()
const dotenv = require("dotenv");
dotenv.config();
const mogodb = require("mongodb");
const conn = require("../db/conn");




router.get('/', (req, res) => {
    res.send('Hello World')
})

router.post('/login', async (req, res) => {
    console.log('login route')
    
    let userattempt = req.body
    let collection = conn.db('ClinicSystem').collection('users')
    let user = collection.findOne({username: userattempt.username, password: userattempt.password}).then((user) => {
        console.log(user)
         if (user != null) {
            res.send(user)
    } else {
        console.log('User not found')
        res.send('User not found')
    }
    }).catch((error) => {
        console.log(error)
    })
    
   


    
    
   
    
    

})

module.exports = router

