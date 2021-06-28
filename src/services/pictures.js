import axios from 'axios'
const baseUrl = '/api/pictures'

const getPictureFromUnsplash = async () => {
  const res = await axios.get(`${baseUrl}/random`)

  return res.data;
};

const pictureByTopic = async (topic) => {
  const res = await axios.get(`${baseUrl}/topic/${topic}`)

  return res.data;
}

const pictureByTopicCount = async (topic, count) => {
  const res = await axios.get(`${baseUrl}/topic/${topic}/${count}`)

  return res.data;
}

const pictureByQueryCount = async (query, count) => {
  const res = await axios.get(`${baseUrl}/query/${query}/${count}`)

  return res.data;
}

export default { 
  getPictureFromUnsplash,
  pictureByTopic, pictureByTopicCount,
  pictureByQueryCount 
}