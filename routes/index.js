//2A: set up route to let pages know where to go
//set up single route at root
//still need to include express
const express = require('express');
const router = express.Router();

//root of application, localhost 3000
router.get('/', (req, res) => {
    //send a basic text, when this page is visited
    // res.send('Hello world!')
    //render this page
    res.render('index')
})

//export this information for other files to use
//export the router you created
module.exports = router

//will result to Cannot GET /
//hoook up application to use this router
//require this file in server.js