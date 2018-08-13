const axios = require('axios');
const keys = require('../config/keys');

module.exports = app => {
  app.get('/api/users', async (req, res) => {
    const request = await axios.get(keys.firebaseURL);
    const { data } = request;
    res.send(data);
  });

  app.post('/api/auth', async (req, res) => {
    const signupUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${keys.webApiKey}`;
    const request = await axios.post(signupUrl, req.body);
    const { data } = request;
    res.send(data);
  });
};
