<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const azureController = require('../controllers/azureController');

router.post('/createProj', azureController.createProj, (req, res) => {
    res.status(200)
})

router.post('/createFunc', azureController.createFunc, (req, res) => {
    res.status(200)
})

router.post('/deployFunc', azureController.deployFunc, (req, res) => {
    res.status(200)
})

module.exports = router;
=======
const express = require('express');
const router = express.Router();
const azureController = require('../controllers/azureController');



module.exports = router;
>>>>>>> 0d0dabfffecd2dc26196ca43f59eccd14a658e32
