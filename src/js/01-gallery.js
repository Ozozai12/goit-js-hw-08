// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import { galleryItems } from './gallery-items';


const gallery = document.querySelector('.gallery');

const galleryList = galleryItems
  .map(item => {
    return `
    <a class="gallery__item" href="${item.original}">
        <img class="gallery__image"
        src="${item.preview}" 
        alt="${item.description}" />
    </a>
    `;
  })
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryList);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
