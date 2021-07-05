import './sass/main.scss';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash/debounce';
import listCountries from './tpl/manyCountry.hbs';
import oneCountrie from './tpl/oneCountrie.hbs';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const form = document.querySelector('.search-form');
const result = document.querySelector('.result');

const getCountriesInform = debounce(event => {
  const form = event.target.value;
  result.innerHTML = '';
  if (!form) {
    return;
  }
  fetchCountries(form).then(renderCountries).catch(handleError);
}, 500);

form.addEventListener('input', getCountriesInform);

function renderCountries(data) {
  const ansLength = data.length;
  if (ansLength >= 2 && ansLength <= 10) result.innerHTML = listCountries(data);
  if (ansLength === 1) result.innerHTML = oneCountrie(data);
  if (ansLength > 10) moreCounties();
}

function handleError(message) {
  result.innerHTML = `<p class="error">${message}</p>`;
}

function moreCounties() {
  error({
    text: 'Too many matches found. Please enter a more specific query!',
  });
}
