const BASE_URL = 'https://api.themoviedb.org';
const KEY_BASE = '040a69881556ed51ed6455576f17640b';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

// * Список самых популярных фильмов на сегодня для создания коллекции на главной странице
export async function fetchMovies(currentPage) {
  return await fetchWithErrorHandling(
    `${BASE_URL}/3/trending/all/week?api_key=${KEY_BASE}&page=${currentPage}`,
  );
}

// * Поиск кинофильма по ключевому слову на странице фильмов.
export async function fetchMovieKeywordById(searchQuery, currentPage) {
  return await fetchWithErrorHandling(
    `${BASE_URL}/3/search/movie?api_key=${KEY_BASE}&language=ru-RU&query=${searchQuery}&page=${currentPage}&include_adult=false`,
  );
}

// * Запрос полной информации о фильме для страницы кинофильма по ID
export async function fetchMovieById(movieId) {
  return await fetchWithErrorHandling(`
${BASE_URL}/3/movie/${movieId}?api_key=${KEY_BASE}&language=ru-RU`);
}

// * Запрос информации о актёрском составе для страницы кинофильма.
export async function fetchMovieActorById(actorId) {
  return await fetchWithErrorHandling(`
${BASE_URL}/3/movie/${actorId}/credits?api_key=${KEY_BASE}&language=ru-RU`);
}

// * Запрос обзоров для страницы кинофильма.
export async function fetchMoviePageById(movieId) {
  return await fetchWithErrorHandling(`
${BASE_URL}/3/movie/${movieId}/reviews?api_key=${KEY_BASE}&language=ru-RU&page=1`);
}

// * Запрос видео

export async function fetchMovieVideoById(movie_id) {
  return await fetchWithErrorHandling(
    `${BASE_URL}/3/movie/${movie_id}/videos?api_key=${KEY_BASE}&language=ru-RU`,
  );
}

export async function fetchMovieVideoByIdEnglish(movie_id) {
  return await fetchWithErrorHandling(
    `${BASE_URL}/3/movie/${movie_id}/videos?api_key=${KEY_BASE}&language=en-EN`,
  );
}
