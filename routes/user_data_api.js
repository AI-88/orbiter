const axios = require('axios');
const keys = require('../config/keys');

module.exports = app => {
  app.get('/api/users', async (req, res) => {
    const request = await axios.get(keys.firebaseURL);
    const { data } = request;
    res.send(data);
  });

  app.post('/api/users', async (req, res) => {
    const { email, password } = req.body;
    const request = await axios.post(keys.userSignupURL, {
      email,
      password,
      returnSecureToken: true
    });
    const { data } = request;
    res.send(data);
  });
};
