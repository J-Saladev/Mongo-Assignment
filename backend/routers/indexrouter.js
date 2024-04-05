const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/login', (req, res) => {
    console.log('login route')
    let data = req.body
    let username = data.username
    let password = data.password


   
    console.log(username, password)
    res.send('login route')

})

module.exports = router

