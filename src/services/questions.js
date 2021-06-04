import axios from 'axios'
const baseUrl = '/api/questions'

const getAllQuestions = async () => {
  const res = await axios.get(baseUrl);

  return res.data;
}

const getAllQuestionsFromCategory = async (category) => {
  const res = await axios.get(baseUrl + category);

  return res.data;
};

export default { getAllQuestions, getAllQuestionsFromCategory }