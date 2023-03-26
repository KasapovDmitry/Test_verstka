// Анимация при скроле
const animItems = document.querySelectorAll('._anim-items');
function scrollAnimation() {
     if (animItems.length > 0){
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - animItemHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
                } else {
                    if (!animItem.classList.contains('_anim-no-hide')) {
                        animItem.classList.remove('_active');
                    }
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
    /* ------- ЗАДЕРЖКА АНИМАЦИИ --------*/
        setTimeout(() => {
            animOnScroll();
        },300);
    }
}

// Паралакс при скроле
const paralax = document.querySelector(".paralax");

function parallaxImage() {
    if (paralax.style.right <= '-' + 800 + 'px') {
        window.addEventListener('scroll', () => {
            paralax.classList.add('paralax-off');
            let { scrollY } = window;
            if (scrollY <= 800) {
                paralax.style.right = '-' + 0.5 * scrollY + 'px';
            }
        });
    }
}

// input[type=range]
function customRange() {
    const inputRange = document.querySelector('input[type="range"].range-progress');
    let rangeValue = document.querySelector('.square_value');

    // Стилизация input[type=range]
    inputRange.style.setProperty('--value', inputRange.value);
    inputRange.style.setProperty('--min', inputRange.min == '' ? '0' : inputRange.min);
    inputRange.style.setProperty('--max', inputRange.max == '' ? '100' : inputRange.max);
    inputRange.addEventListener('input', () => inputRange.style.setProperty('--value', inputRange.value));
    
    // input[type=range] пересчет значения
    inputRange.addEventListener('input', () => {
        rangeValue.innerHTML = inputRange.value;
    });
}

// Меняем класс
function changeClass(nod, atr ) {
    nod.classList.toggle(atr);
}

document.addEventListener('DOMContentLoaded', function() {
    // Анимация при скроле
    scrollAnimation();
    // Паралакс при скроле
    parallaxImage();
    // input[type=range] 
    customRange();
    // Меняем класс burger
    let burger = document.querySelector(".burger--wrapper");
    let menuItem = document.querySelector(".nav__item--menu");
    burger.addEventListener('click', () => {
        changeClass(burger, "open");
    });
    menuItem.addEventListener('click', () => {
        changeClass(burger, "open");
    });
});