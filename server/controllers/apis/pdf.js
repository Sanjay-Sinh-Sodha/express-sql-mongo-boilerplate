const express = require('express');

const pdfService = require('../../services/pdfservice/react-node-pdf');

const router = express.Router();
router.get('/', (req, res) => {
  pdfService.generatePdF(req, res, 'http://localhost:3000');
});
module.exports = router;
