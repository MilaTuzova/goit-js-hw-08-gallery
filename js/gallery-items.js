const images = [{
        preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
        description: 'Hokkaido Flower',
    }, {
        preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
    }, {
        preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
    }, {
        preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
    }, {
        preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
    }, {
        preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
    }, {
        preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
    },

    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
    },

    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
    },
];

const ul = document.querySelector('ul');

const galeryImages = createdImagesCards(images);

ul.insertAdjacentHTML('beforeend', galeryImages);

function createdImagesCards(img) {
    return img.map(({ original, preview, description }) => {

        return `<li class="gallery__item">
            <a
              class="gallery__link"
              href="${original}"
            >
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                width="392"
                height="240"
              />
            </a>
          </li>`;
    }).join('');

};

const ulContainer = document.querySelector("ul.js-gallery");
const imgItems = document.querySelectorAll(".gallery__item");
const modal = document.querySelector('div.lightbox');
const buttonCloseModal = document.querySelector('button');
const modalImg = document.querySelector('.lightbox__image');
const overlayContainer = document.querySelector('.lightbox__overlay');


// ulContainer.addEventListener('click', stopDefActive);

// function stopDefActive(e) {
//     e.preventDefault();
// }

ulContainer.addEventListener('click', openModal);
ulContainer.addEventListener('click', addBigImag);

function openModal(evt) {
    evt.preventDefault();
    if (!evt.target.src) {
        return
    }
    modal.classList.add('is-open');

};

function addBigImag(e) {
    modalImg.src = e.target.dataset.source;
    modalImg.alt = e.target.alt;
}

buttonCloseModal.addEventListener('click', closeModal);
overlayContainer.addEventListener('click', closeModal);

function closeModal() {
    modal.classList.remove('is-open');
    modalImg.src = " ";
}

// function onArrowRight() {
//     if (currentIndex + 1 > galleryItems.length - 1) {
//         currentIndex = 0;
//     } else {
//         currentIndex += 1;
//     }
//     lightBoxImgContent(
//         galleryItems[currentIndex].original,
//         galleryItems[currentIndex].description,
//     );
// }

// function onArrowLeft() {
//     if (currentIndex - 1 < 0) {
//         currentIndex = galleryItems.length - 1;
//     } else {
//         currentIndex -= 1;
//     }
//     lightBoxImgContent(
//         galleryItems[currentIndex].original,
//         galleryItems[currentIndex].description,
//     );
// }