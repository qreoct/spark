import axios from 'axios'
const baseUrl = '/api/pictures'

const getPictureFromUnsplash = async () => {
  const res = await axios.get(`${baseUrl}/random`)

  return res.data;
};

const pictureByTopic = async (topic) => {
  const res = await axios.get(`${baseUrl}/topic/${topic}`)

  console.log('service called: ' + JSON.stringify(res.data));

  return res.data;
}

export default { getPictureFromUnsplash, pictureByTopic }