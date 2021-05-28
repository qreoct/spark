import axios from 'axios'
const baseUrl = '/api/questions'

const getSingleQuestion = async () => {
  const res = await axios.get(baseUrl);

  // right now it's received in an array
  return res.data[0];
};

export default { getSingleQuestion }