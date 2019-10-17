const { Client } = require('elasticsearch');

const client = new Client({
  host: 'http://localhost:9200',
  log: 'trace',
});

module.exports = {
  ping: (req, res) => {
    client
      .ping({ requestTimeout: 30000 })
      .then(() => {
        res.status(200);
        return res.json({ msg: '::::elastic search running:::' });
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
        return res.json({ msg: 'elastic not running:::', err });
      });
  },
  initIndex: (req, res, indexname) => {
    client.indices
      .create({ index: indexname })
      .then((resp) => {
        res.status(200);
        return res.json(resp);
      })
      .catch((err) => {
        res.status(500);
        return res.json({ msg: '!!! elastic not running !!!', err });
      });
  },
  indexExists: (req, res, indexname) => {
    client.indices
      .exists({ index: indexname })
      .then((resp) => {
        res.status(200);
        return res.json(resp);
      })
      .catch((err) => {
        res.status(500);
        return res.json({ msg: '!!! elastic not running !!!', err });
      });
  },
  initMapping: (req, res, index, type, body) => {
    client.indices
      .putMapping({ index, type, body })
      .then((resp) => {
        res.status(200);
        return res.json(resp);
      })
      .catch((err) => {
        res.status(500);
        return res.json({ msg: '!!! elastic not running !!!', err });
      });
  },
  addDocument: (req, res, index, id, docType, payload) => {
    client
      .index({
        index,
        id,
        type: docType,
        body: payload,
      })
      .then((resp) => {
        res.status(200);
        return res.json(resp);
      })
      .catch((err) => {
        res.status(500);
        return res.json({ msg: '!!! elastic not running !!!', err });
      });
  },
  updateDocument: (req, res, index, id, docType, payload) => {
    client
      .update({
        index,
        id,
        type: docType,
        body: payload,
      })
      .then((resp) => {
        res.status(200);
        return res.json(resp);
      })
      .catch((err) => {
        res.status(500);
        return res.json({ msg: '!!! elastic not running !!!', err });
      });
  },
  search: (req, res, index, docType, payload) => {
    client
      .search({
        index,
        type: docType,
        body: payload,
      })
      .then((resp) => {
        res.status(200);
        return res.json(resp);
      })
      .catch((err) => {
        res.status(500);
        return res.json({ msg: '!!! elastic not running !!!', err });
      });
  },
  deleteDocument: (req, res) => {
    client
      .delete({
        index: '_all',
      })
      .then((resp) => {
        res.status(200);
        return res.json(resp);
      })
      .catch((err) => {
        res.status(500);
        return res.json({ msg: '!!! elastic not running !!!', err });
      });
  },
  deleteAll: (req, res, index, id, docType) => {
    client
      .update({
        index,
        id,
        type: docType,
      })
      .then((resp) => {
        res.status(200);
        return res.json(resp);
      })
      .catch((err) => {
        res.status(500);
        return res.json({ msg: '!!! elastic not running !!!', err });
      });
  },
};
