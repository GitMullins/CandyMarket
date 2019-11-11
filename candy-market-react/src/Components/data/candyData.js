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

const postCandy = newCandy => axios.post(`${baseUrl}`, newCandy);

const eatCandy = candyId => axios.delete(`${baseUrl}/${candyId}/eat`);

const putCandy = (updatedCandy, candyId) => axios.put(`${baseUrl}/${candyId}/donate`, updatedCandy);

export default {
  getCandy,
  postCandy,
  eatCandy,
  putCandy
};