import _ from 'lodash';
import axios from 'axios';
import debounce from 'debounce-promise';

const asyncValidate = async values => {
  const request = await axios.get('/api/users');
  const { data } = request;
  if (_.map(data).find(user => user.email === values.email)) {
    throw { email: 'Email already exists!'};
  }
};

export default debounce(asyncValidate, 500);
