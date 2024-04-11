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
    let collection = conn.db('ClinicSystem').collection('Users')
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

router.get('/:field', (req, res) => {
    let field = req.params.field
    console.log(field)
    const collection = conn.db('ClinicSystem').collection(`${field}`)
    
    // this just never resolves
//    collection.find({}, {projection: {_id: 0} }).toArray((err, result) => {
//        if (err) throw err
//        console.log(result)
//        res.send(result)
//    }).catch((error) => {
//        console.log(error)
//    })

    // This returns an array but the array is empty vvv
    const result = collection.find({}, {projection: {_id: 0} }).toArray()
    res.send(result)

})

module.exports = router

