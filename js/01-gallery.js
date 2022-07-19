import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

/** //TODO - План:
1) Потрібно відмалювати розмітку галереї використовуючи 
масив картинок

2) При рендері галереї потрібно підставити в розмітку 
правильні поля

3) Потрібно навішати клік на вашу галерею використовуючи 
делегування

4) Визначати елемент на який клікнули через event.target

5) Потрібно считати данні з атрибута data - source і 
підставити їх в модальне вікно

6) Має зявитися модальне вікно з картинкою яку ви отримали 
з атрибута data - source
*/

function createDivItem(array) {
  return array.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
      </div>
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
