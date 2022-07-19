import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

/** //TODO - План:
1) Создание и рендер разметки по массиву данных galleryItems и 
предоставленному шаблону элемента галереи. Используй готовый 
код из первого задания.

2) Подключение скрипта и стилей библиотеки используя CDN сервис 
cdnjs. Необходимо добавить ссылки на два файла: 
simple-lightbox.min.js и simple-lightbox.min.css.

3) Инициализация библиотеки после того как элементы галереи 
созданы и добавлены в div.gallery. Для этого ознакомься с 
документацией SimpleLightbox - в первую очередь секции 
«Usage» и «Markup».

4) Посмотри в документации секцию «Options» и добавь отображение 
подписей к изображениям из атрибута alt. Пусть подпись будет 
снизу и появляется через 250 миллисекунд после открытия 
изображения.
*/

function createDivItem(array) {
  return array.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
      </div>

      <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>
`,
    ""
  );
}

const addMarkup = createDivItem(galleryItems);

const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("beforeend", addMarkup);

function itemHandler(ev) {
  ev.preventDefault();

  if (!ev.target.classList.contains("gallery__image")) {
    return;
  }

  const source = ev.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${source}">`);

  instance.show();
}

galleryList.addEventListener("click", itemHandler);
