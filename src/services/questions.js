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

export default { getAllQuestions, getAllQuestionsFromCategory, getSoloQuestions }