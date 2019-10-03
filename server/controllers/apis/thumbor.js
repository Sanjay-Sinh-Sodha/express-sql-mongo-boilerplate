const express = require('express');

const router = express.Router();

const thumborService = require('../../services/imageProcess/thumbor');

router.get('/', thumborService.editImage);

module.exports = router;
