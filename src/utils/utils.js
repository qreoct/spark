// shuffle array in-place using Fisher-Yates
// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array

const shuffle = (a) => {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

const timestampToMM = (timestamp) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
    'Jun', 'Jul', 'Aug','Sep','Oct','Nov','Dec']
  return months[new Date(timestamp).getMonth()-1];
}

const timestampToString = (timestamp) => {

  function padZero(i) {
    if (i < 10) { 
      i = '0' + i;
    }
    return i;
  }

  const dd = new Date(timestamp);
  const d = dd.getDate();
  const months = ['January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August','September','October','November','December']
  const m = months[dd.getMonth()-1];
  const y = dd.getFullYear();
  const t = `${padZero(dd.getHours())}:${padZero(dd.getMinutes())}`;

  return (`${d} ${m} ${y}, ${t}`);
}

const writeToFavs = (e) => {
  var old = readFavsFromStorage();
  old.push(e);
  localStorage.setItem('favs', JSON.stringify(old));
}

const toggleFromFavs = (e) => {
  var old = readFavsFromStorage();
  var index = old.findIndex(o => o.id === e.id);
  if (index === -1) {
    old.push(e);
  } else {
    old.splice(index, 1);
  }
  localStorage.setItem('favs', JSON.stringify(old));
}

const isInFavs = (e) => {
  var old = readFavsFromStorage();
  return (old.findIndex(o => o.id === e.id) != -1);
}

// assumes that favs exist in localstorage
// returns array containing favs
const readFavsFromStorage = () => {
  return JSON.parse(localStorage.getItem('favs')) || [];
}

const checkSoloReady = () => {
  // read last posted date in solo timestamp
  // if timestamp doesn't exist, guaranteed to be ready.
  // is current day is a different date?
  // if so, return true
  // otherwise, return false
  if (!JSON.parse(localStorage.getItem('solo'))) {
    return true;
  } else {
    const stamp = new Date(JSON.parse(localStorage.getItem('solo')));
    const now = new Date(Date.now());
    if (stamp.getDate() !== now.getDate() ||
        stamp.getMonth() !== now.getMonth() ||
        stamp.getUTCFullYear() !== now.getUTCFullYear()) {
      return true;
    }
    return false;
  }
}

const setSoloTimestamp = () => {
  let now = Date.now();
  localStorage.setItem('solo', JSON.stringify(now));
}

const writeSoloReflection = (content) => {
  let now = Date.now();
  let save = {
    question: content.question,
    reflection: content.reflection,
    picture: content.picture || false,
    timestamp: now
  }
  let current = JSON.parse(localStorage.getItem('reflection')) || [];
  localStorage.setItem('reflection', JSON.stringify([...current, save]));
}

const hasOnbording = (mode) => {
  if(!JSON.parse(localStorage.getItem(`onboarding-${mode}`))){
    localStorage.setItem(`onboarding-${mode}`, 'true');
    return true;
  }
  return false;
}


export default {
  shuffle, timestampToMM, timestampToString,
  writeToFavs, toggleFromFavs, isInFavs, readFavsFromStorage,
  checkSoloReady, setSoloTimestamp, writeSoloReflection,
  hasOnbording
}