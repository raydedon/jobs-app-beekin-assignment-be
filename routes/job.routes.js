let express = require('express');
let router = express.Router();
const jobs = require('../controllers/job.controller');

// router.post('/', jobs.create);

router.get('/', jobs.findAll);

/*
router.put('/:todoId', jobs.update);

router.delete('/:todoId', jobs.delete);
*/

module.exports = router;

