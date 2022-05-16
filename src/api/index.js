import axios from 'axios';
  let url = 'http://localhost:8999/'
  const searchDir = '../../mbp-pwa-ui/src';

export const query = async (url, term1, term2, dir) => {
  let body = {term1, term2, dir};
  const res = await axios.post(url, body);
  console.log('post res', res)
  return res;
};

export const search = async  (url) => {
  const res = await axios.get(url);
  return res;
};


export const query2 = async (t1, t2, param, flag) => {
  const body = {term1: t1, term2: t2, dir: param, flag: flag};
  const URL = `${url}query`;
  console.log('URL', URL);
  console.log('body', body);
  let error = { status: '', message: '' }
  try{
    const res = await axios.post(URL, body);
    console.log('post 2', res);
    return res;
  } catch (e) {
    if(e.response) {
      error = { status: e.response.status, message: e.response.message};
      console.log('my error', error);
      return error;
    } else if (e.request) {
      error = { status: e.response.status, message: e.response.message};
      return error;
    } else {
      console.log('error in api: ', e.message);
    }
  }

}