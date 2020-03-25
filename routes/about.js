const express = require('express');
const router = express.Router();

//all project detail route
router.get('/', (req, res) => {
    res.render('about')
    // res.send('Create')
})

router.post('/', (req, res) => {
    res.send('Create')
})


// router.

module.exports = router