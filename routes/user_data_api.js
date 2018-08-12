const axios = require('axios');
const keys = require('../config/keys');

module.exports = app => {
  app.get('/api/users', async (req, res) => {
    const request = await axios.get(keys.firebaseURL);
    const { data } = request;
    res.send(data);
  });

  app.post('/api/users', (req, res) => {
    const { email, password } = req.body;
    const request = axios.post(keys.userSignupURL, {
      email,
      password,
      returnSecureToken: true
    }).then(response => {
      res.send(response);
    }).catch(error => {
      const { response: { status }} = error;
      res.sendStatus(status);
    });
  });
};
