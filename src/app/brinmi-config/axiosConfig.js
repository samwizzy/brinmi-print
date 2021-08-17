import axios from 'axios';

const baseURL = 'http://134.209.64.28:8082/';

const token = localStorage.getItem('token');

axios.defaults.baseURL = baseURL;

axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
axios.defaults.headers.common['X-Frame-Options'] = 'sameorigin';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
