const route = require('express').Router();
const restrict = require('../middleware/restrict')
const { CreateUser, Login, } = require('../controller/user.controller')

route.post('/register', CreateUser)
route.post('/login', Login)
route.get('/ping',(req, res, next) => {
    res.json({
        "data": null,
        "message": "PONG",
        "status": 200
    })
})
module.exports = route;