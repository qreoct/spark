const getPictureFromUnsplash = async () => {
  // eslint-disable-next-line no-undef
  const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + `${process.env.REACT_APP_UNSPLASH_API_KEY}`, {
    method: "GET"
  });

  return response;
};

export default { getPictureFromUnsplash };