import axios from 'axios';

const baseUrl = 'https://localhost:44337/candy';

const getCandy = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}`).then((result) => {
    resolve(result.data);
  })
    .catch((error) => {
      reject(error);
    });
});

const postCandy = newCandy => axios.post(`${baseUrl}.json`, newCandy);

export default {
  getCandy,
  postCandy
};