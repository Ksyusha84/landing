//Найти нужные узлы

const popupButton = document.querySelector('.popup-menu__button');
const popupWrapper = document.querySelector('.popup-menu');
const popupMenu = document.querySelector('.popup-menu__list');

//Выполним функцию нажатия на кнопку

popupButton.addEventListener('click', handleMenu);

//Функция, которая показывает и скрывает попап

function handleMenu () {
    popupMenu.classList.toggle('hide-popup');
}

//Выполним функцию при нажатии на любое место экрана

document.addEventListener('click', hidePopup);

//Сама функция

function hidePopup(el) {
    //Проверяем, есть ли внутри того, по чему кликнули поп-ап или кнопка
    let targetInside = popupWrapper.contains(el.target);
    //Если нет то прячем меню
    if(!targetInside) {
        popupMenu.classList.add('hide-popup');
    }
    else {
        return;
    }
}

