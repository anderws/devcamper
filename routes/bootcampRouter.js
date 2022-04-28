const express = require('express');
const router = express.Router();
const controller = require('../controllers/bootcampController');

router.get('/', controller.getBootcamps);
router.get('/:id', controller.getBootcamp);
router.post('/', controller.createBootcamp);
router.put('/:id', controller.updateBootcamp);
router.delete('/:id', controller.deleteBootcamp);

module.exports = router;