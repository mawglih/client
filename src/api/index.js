import axios from 'axios';


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
