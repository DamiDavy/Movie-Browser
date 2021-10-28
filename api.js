export const fetchMovies = async (title, p = 1) => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=8861ccd6&s=${title}&page=${p}`)
  const results = await response.json();
  return results;
}

export const fetchMovieDetails = async (imdb) => {
  console.log(imdb);
  const response = await fetch(`http://www.omdbapi.com/?apikey=8861ccd6&i=${imdb}`)
  const results = await response.json();
  console.log(results);
  return results;
}

export const fetchMoviesExtended = async (title, type = null, y = null, p = 1) => {
  let response;
  if (type && y) {
    response =
      await fetch(`http://www.omdbapi.com/?apikey=8861ccd6&s=${title}&type=${type}&y=${y}&page=${p}`);
  }
  else if (type && !y) {
    response =
      await fetch(`http://www.omdbapi.com/?apikey=8861ccd6&s=${title}&type=${type}&page=${p}`);
  }
  else if (!type && y) {
    response =
      await fetch(`http://www.omdbapi.com/?apikey=8861ccd6&s=${title}&y=${y}&page=${p}`);
  }
  else {
    response = await fetch(`http://www.omdbapi.com/?apikey=8861ccd6&s=${title}&page=${p}`);
  }
  const results = await response.json();
  return results;
}