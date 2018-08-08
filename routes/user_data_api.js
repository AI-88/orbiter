const axios = require('axios');
const keys = require('../config/keys');

module.exports = app => {
  app.get('/api/users', async (req, res) => {
    const request = await axios.get(keys.firebaseURL);
    const { data } = request;
    res.send(data);
  });

  app.post('/api/users', async (req, res) => {
    const request = await axios.post(keys.firebaseURL, req.body);
    const { data } = request;
    res.send(data);
  });
};
