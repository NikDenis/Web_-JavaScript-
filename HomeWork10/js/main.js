import { dataCars } from "./data.js";

const content = document.querySelector('.content-box');
const data = JSON.parse(dataCars);
console.log(data);

data.forEach(({ id, brand, year, model, url}) => {
    const div = document.createElement('div');
    div.classList.add('card');
    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.alt = 'image';
    img.src = url;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h2');
    title.classList.add('card-title');
    title.textContent = `Марка автомобиля: ${brand}`;

    const subtitle = document.createElement('h6');
    subtitle.classList.add('card-subtitle', 'mb-2', 'text-muted');
    subtitle.textContent = `Год выпуска: ${year}`;

    const cardBreed = document.createElement('p');
    cardBreed.classList.add('card-breed');
    cardBreed.textContent = `Модель: ${model}`;

    const idPara = document.createElement('p');
    idPara.classList.add('card-content');
    idPara.textContent = `ID: ${id}`;

    cardBody.appendChild(title);
    cardBody.appendChild(subtitle);
    cardBody.appendChild(idPara);
    cardBody.appendChild(cardBreed);

    div.appendChild(img);
    div.appendChild(cardBody);

    content.appendChild(div);
});