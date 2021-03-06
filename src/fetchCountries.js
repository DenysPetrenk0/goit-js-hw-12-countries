const TYPICODE_BASE_URL = 'https://restcountries.eu/rest/v2/name';

function fetchCountries(countries) {
  return fetch(`${TYPICODE_BASE_URL}/${countries}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject('Такой страны не найдено');
  });
}

export { fetchCountries };
