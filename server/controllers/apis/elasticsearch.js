const express = require('express');

const elasticSearchService = require('../../services/elasticsearch/elasticSearch');

const router = express.Router();
router.get('/ping', elasticSearchService.ping);
router.get('/initIndex', (req, res) => {
  return elasticSearchService.initIndex(req, res, 'test');
});
router.get('/indexcheck', (req, res) => {
  return elasticSearchService.indexExists(req, res, 'test');
});
router.get('/initmapping', (req, res) => {
  let indexName = 'test';
  let typeName = 'check';
  return elasticSearchService.initMapping(
    req,
    res,
    indexName,
    typeName,
    {
      properties: {
        title: { type: 'text' },
      },
    },
  );
});
router.get('/adddocument', (req, res) => {
  return elasticSearchService.addDocument(
    req,
    res,
    'test',
    1,
    'check',
    {
      properties: {
        title: { type: 'text' },
      },
    },
  );
});
router.get('/updatedocument', (req, res) => {
  return elasticSearchService.addDocument(
    req,
    res,
    'test',
    1,
    'check',
    {
      properties: {
        title: { type: 'text' },
      },
    },
  );
});
module.exports = router;
