//находим кнопку
const header = document.querySelector('.main-content__header');

//слушаем событие скрола на странице
window.addEventListener('scroll', function(){
    
    //Если пользователь проскролил страницу больше чем высота экрана
    //То мы будем показывать кнопку
    if(window.pageYOffset > 0) {
        header.classList.add('main-content__header_shadow');
    } else {
        header.classList.remove('main-content__header_shadow')
    }

})