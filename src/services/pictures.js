import axios from 'axios'
const baseUrl = '/api/pictures'

const getPictureFromUnsplash = async () => {
  const res = await axios.get(`${baseUrl}/random`)

  return res.data;
};

export default { getPictureFromUnsplash }