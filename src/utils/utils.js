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

export default { shuffle, writeToFavs, toggleFromFavs, isInFavs, readFavsFromStorage }