import axios from 'axios';

const apikey = '8196190b08906dda0ebf6e6f5d';

const update_delay = 10000;

let restdb = axios.crete({
  baseURL : '',
  timeout: 1000,
  headers:{
      'x-apikey': apikey
  }
})

const realTimeURL = ``

export {apikey ,restdb,realTimeURL,update_delay};