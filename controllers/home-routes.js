const router = require('express').Router();
const sequelize = require('../config/connection')
//const { Post , User, Comment } = require('../models')


router.get('/', (req, res) => {
    console.log("Test!")
    res.send("tests")
})

module.exports = router;