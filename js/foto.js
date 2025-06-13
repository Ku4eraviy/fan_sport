// Получаем все элементы
const thumbs = document.querySelectorAll('.thumb');
const sliderOverlay = document.getElementById('sliderOverlay');
const sliderImg = document.getElementById('sliderImg');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0; // Текущий индекс фото

// 1. Открытие слайдера при клике на миниатюру
thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        currentIndex = index; // Запоминаем индекс
        sliderImg.src = thumb.src; // Подставляем фото
        sliderOverlay.style.display = 'flex'; // Показываем слайдер
    });
});

// 2. Закрытие слайдера
closeBtn.addEventListener('click', () => {
    sliderOverlay.style.display = 'none';
});

// 3. Листание вперед
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % thumbs.length; // Круговой переход
    sliderImg.src = thumbs[currentIndex].src;
});

// 4. Листание назад
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
    sliderImg.src = thumbs[currentIndex].src;
});

// 5. Закрытие по клику вне фото
sliderOverlay.addEventListener('click', (e) => {
    if (e.target === sliderOverlay) {
        sliderOverlay.style.display = 'none';
    }
});