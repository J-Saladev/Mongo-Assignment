const express = require('express')
const router = express.Router()
const dotenv = require("dotenv");
dotenv.config();
const mogodb = require("mongodb");
const conn = require("../db/conn");

const db = conn.getDb();


router.get('/', (req, res) => {
    res.send('Hello World')
})

router.post('/login', async (req, res) => {
    console.log('login route')
    
    let userattempt = req.body
    let collection = await db.collection('Users')
    let user = await collection.findOne({username: userattempt.username, password: userattempt.password})
    if (user) {
        res.send(user)
    } else {
        res.send('User not found')
    }


    
    
   
    
    

})

module.exports = router

