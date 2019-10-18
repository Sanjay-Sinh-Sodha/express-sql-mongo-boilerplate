const express = require('express');

const pdfService = require('../../services/pdfservice/react-node-pdf');
const pdfService2 = require('../../services/pdfservice/pdfkit');

const router = express.Router();
router.get('/', (req, res) => {
  pdfService.generatePdF(req, res, 'http://localhost:3000');
});

router.get('/generate', (req, res) => {
  pdfService2.generatePDF(req, res);
});
module.exports = router;
