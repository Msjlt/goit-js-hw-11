'use strict';

// Library Izitoast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Library SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

document
  .getElementById('search-form')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    // Получаем значение из текстового поля
    const searchQuery = document.getElementById('search-input').value.trim();

    // Проверяем, не пустая ли строка поиска
    if (searchQuery === '') {
      alert('Please enter a search query');
      return; // Прерываем выполнение функции, если строка пуста
    }

    // Выполняем HTTP-запрос с поисковым запросом
    fetch(`https://api.example.com/images?query=${searchQuery}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Обработка полученных данных (например, отображение изображений)
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  });
