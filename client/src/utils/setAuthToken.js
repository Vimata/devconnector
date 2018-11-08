import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    //Apply to very req
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    //Delete Auth Token
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
