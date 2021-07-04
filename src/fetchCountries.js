const TYPICODE_BASE_URL = "https://restcountries.eu/rest/v2/name";

function fetchCountries(countries) {

  return fetch(`${TYPICODE_BASE_URL}/${countries}`).then((response) =>
    response.json()
  );

}

export { fetchCountries };