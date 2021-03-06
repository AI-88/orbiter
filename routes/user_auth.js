const axios = require('axios');
const keys = require('../config/keys');

module.exports = app => {
  app.post('/api/signup', async (req, res) => {
    const signupUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${keys.webApiKey}`;
    try {
      const request = await axios.post(signupUrl, req.body);
      const { data } = request;
      res.send(data);
    } catch ({ response }) {
      const { data } = response;
      res.send(data);
    }
  });

  app.post('/api/login', async (req, res) => {
    const loginUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${keys.webApiKey}`;
    try {
      const request = await axios.post(loginUrl, req.body);
      const { data } = request;
      res.send(data);
    } catch ({ response }) {
      const { data } = response;
      res.send(data);
    }
  });
};
