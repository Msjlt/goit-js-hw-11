'use strict';

// Library Izitoast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Library SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const API_KEY = '43059810-21766dfeafea29ca9c24ae0e2';
const list = document.getElementById('list');
const params = new URLSearchParams({
  key: API_KEY,
  q: `cat+dog`,
  // q: 'red rose',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});

fetch(`https://pixabay.com/api?${params}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    list.insertAdjacentHTML('beforeend', createMarkup(data.hits));
  })
  .catch(error => {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  });

function createMarkup(arr) {
  return arr
    .map(
      ({ id, previewURL, tags }) => `
        <li data-id="${id}">
            <img src="${previewURL}" alt="${tags}" width="300">
        </li>
    `
    )
    .join('');
}
