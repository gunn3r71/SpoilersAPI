const express = require('express');
const spoiler = require('../controller/spoiler');

const router = express.Router();

router.get('/spoiler/:id', spoiler.getById);
router.get('/spoiler/'), spoiler.getAll;
router.post('/spoiler/',spoiler.create);
router.put('/spoiler/:id',spoiler.update);
router.put('/spoiler/:id',spoiler.softDelete);
router.delete('/spoiler/:id',spoiler.hardDelete);

module.exports = router;