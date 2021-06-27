import axios from 'axios'
import { shuffle } from '../utils/shuffle'
const baseUrl = '/api/questions'

const getAllQuestions = async () => {
  const res = await axios.get(baseUrl);

  // right now it's received in an array
  return res.data;
};

const getAllQuestionsFromCategory = async (category) => {
  const res = await axios.get(baseUrl + '/' + category);

  return res.data;
};

const getQuestionsFromCategory = async (category, ...args) => {
  const resOne = await axios.get(`${baseUrl}/${category}/1`)
  const resTwo = await axios.get(`${baseUrl}/${category}/2`)
  const resThree = await axios.get(`${baseUrl}/${category}/3`)

  let result = []
  const [numOfOne, numOfTwo, numOfThree] = [...args]
  if (numOfOne) {
    const levelOne = shuffle(resOne.data).slice(0, numOfOne)
    result = [...result, ...levelOne]
  }
  if (numOfTwo) {
    const levelTwo = shuffle(resTwo.data).slice(0, numOfTwo)
    result = [...result, ...levelTwo]
  }
  if (numOfThree) {
    const levelThree = shuffle(resThree.data).slice(0, numOfThree)
    result = [...result, ...levelThree]
  }
  return result
}


export default { getAllQuestions, getAllQuestionsFromCategory, getQuestionsFromCategory }