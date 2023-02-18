// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 6;
let boxes = document.querySelectorAll('.featured__item');

console.log(boxes);

function loadMore() {
    for (let i = currentItem; i < currentItem + 3; i++) {
        boxes[i].style.display = 'inline-block';
    }
    
    currentItem += 3;

    if(currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }
}

loadMoreBtn.addEventListener('click', loadMore);
