import axios from 'axios'
import Util from '../utils/utils'

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
    const levelOne = Util.shuffle(resOne.data).slice(0, numOfOne)
    result = [...result, ...levelOne]
  }
  if (numOfTwo) {
    const levelTwo = Util.shuffle(resTwo.data).slice(0, numOfTwo)
    result = [...result, ...levelTwo]
  }
  if (numOfThree) {
    const levelThree = Util.shuffle(resThree.data).slice(0, numOfThree)
    result = [...result, ...levelThree]
  }
  return result
}

const getSoloQuestions = async () => {
  let lv_small = await axios.get(baseUrl + '/solo/1')
  const coin = [2,2,2,2,3][Math.floor(Math.random()*5)] // rng for 80% lv2, 20% lv3
  let lv_big = await axios.get(baseUrl + '/solo/' + coin);

  // pick two from small
  lv_small = Util.shuffle(lv_small.data).slice(0,2);

  // pick one from big
  lv_big = lv_big.data[Math.floor(Math.random() * lv_big.data.length)];
  
  return [...lv_small, lv_big];
}

export default { getAllQuestions, getAllQuestionsFromCategory, getQuestionsFromCategory, getSoloQuestions }
