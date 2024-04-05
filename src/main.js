'use strict';

// Library Izitoast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Library SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Import
import { servicePicture } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';

// Code
const searchForm = document.getElementById('search-form');
const list = document.getElementById('list');

searchForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { picture } = event.currentTarget.elements;

  // Show Loader
  function showLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.style.display = 'block';
    }
  }

  // Hide Loader
  function hideLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.style.display = 'none';
    }
  }

  showLoader();

  servicePicture(picture.value)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        list.innerHTML = createMarkup(data.hits);

        const gallery = new SimpleLightbox('.pictureCard a', {
          captionType: 'attr',
          captionsData: 'alt',
          captionDelay: 250,
        });
        gallery.refresh();
      }
    })
    .catch(error => {
      console.error('Error:', error);
    })
    .finally(() => {
      hideLoader();
      searchForm.reset();
    });
}
