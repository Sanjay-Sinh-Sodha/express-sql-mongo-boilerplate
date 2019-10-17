const express = require('express');
const registerController = require('../../controllers/apis/register');
const loginController = require('../../controllers/apis/login');
const dashboardController = require('../../controllers/apis/dashboard');
const companyController = require('../../../dbcontroller').company;
const imageController = require('../../controllers/apis/thumbor');
const elasticSearchController = require('../../controllers/apis/elasticsearch');
const pdfController = require('../../controllers/apis/pdf');

const router = express.Router();

router.post('/register', registerController.registerUser);
router.use('/login', loginController);
router.use('/dashboard', dashboardController);
router.post(
  '/company/add_with_branches',
  companyController.addWithBranches,
);
router.use('/image/edit', imageController);
router.get('/testcheck', (req, res) => {
  res.send({ msg: 'success' });
});
router.use('/elasticsearch', elasticSearchController);
router.use('/pdf', pdfController);
module.exports = router;
