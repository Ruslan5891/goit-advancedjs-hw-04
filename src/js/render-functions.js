import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');
const loadMoreBtnEl = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
            loading="lazy"
          />
        </a>
        <ul class="info">
          <li class="info-item">
            <span class="info-label">Likes</span>
            <span class="info-value">${likes}</span>
          </li>
          <li class="info-item">
            <span class="info-label">Views</span>
            <span class="info-value">${views}</span>
          </li>
          <li class="info-item">
            <span class="info-label">Comments</span>
            <span class="info-value">${comments}</span>
          </li>
          <li class="info-item">
            <span class="info-label">Downloads</span>
            <span class="info-value">${downloads}</span>
          </li>
        </ul>
      </li>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderEl.classList.add('is-hidden');
}

export function showLoadMoreButton() {
  loadMoreBtnEl.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtnEl.classList.add('is-hidden');
}
