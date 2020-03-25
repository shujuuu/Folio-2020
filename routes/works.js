const express = require('express');
const router = express.Router();

//all project route
router.get('/', (req, res) => {
    res.render('works')
    // res.send('Create')
})
router.post('/', (req, res) => {
    res.send('Create')
})


module.exports = router